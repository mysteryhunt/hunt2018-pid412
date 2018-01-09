#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <unistd.h>
#include <emscripten/emscripten.h>

#include <string.h>
#include <errno.h>

#include "sha256.h"

int loaded = 0;
int session_set = 0;
BYTE session[1024];
size_t session_len;

void EMSCRIPTEN_KEEPALIVE setSessionId(char* sess) {
  if (session_set) {
    return;
  }

  session_set = 1;
  strcpy(session, sess);
  session_len = strlen(session);
}

// From: https://github.com/technion/libscrypt/blob/master/crypto_scrypt-hexconvert.c
int hexconvert(BYTE buf[], size_t s, BYTE outbuf[], size_t obs)
{
  size_t i;
  int len = 0;

  if (!buf || s < 1 || obs < (s * 2 + 1)) {
    return 0;
  }

  memset(outbuf, 0, obs);

  for(i=0; i<=(s-1); i++) {
    /* snprintf(outbuf, s,"%s...", outbuf....) has undefined results
    * and can't be used. Using offests like this makes snprintf
    * nontrivial. we therefore have use inescure sprintf() and
    * lengths checked elsewhere (start of function) */
    /*@ -bufferoverflowhigh @*/
    len += sprintf(outbuf+len, "%02x", (unsigned int) buf[i]);
  }

  return 1;
}

// Simple C function that returns a number between 1 and 6.
int EMSCRIPTEN_KEEPALIVE doIt(char* challenge) {
  if (!loaded) {
    sleep(4);
  } else {
    sleep(1);
  }

  BYTE sekrit[] = {"1b6cd02228739723d0499e9e60c7329919cbdd56791ef481eb4a0d7648574244"};
  size_t sekrit_len = strlen(sekrit);
  size_t challenge_len = strlen(challenge);

  // generate input
  BYTE input[session_len + sekrit_len + challenge_len];
  strcpy(input, challenge);
  strcat(input, sekrit);
  strcat(input, session);

  // sha256 it
  BYTE shaBuf[SHA256_BLOCK_SIZE];
  SHA256_CTX ctx;

  sha256_init(&ctx);
  sha256_update(&ctx, input, strlen(input));
  sha256_final(&ctx, shaBuf);

  // hex it
  BYTE hexBuf[1024];
  int success;
  success = hexconvert(shaBuf, SHA256_BLOCK_SIZE, hexBuf, 1024);

  return hexBuf;
}


// The code inside the main will be executed once the WASM module loads.
int main(int argc, char ** argv) {
  sleep(4);
  loaded = 1;

  return 0;
}

