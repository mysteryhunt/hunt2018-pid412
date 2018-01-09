export default function makeWorker() {
  const blob = new Blob([
    atob('{{ sh "base64 -i out/worker.js" | trim }}')
  ], { type: 'text/javascript' });

  return new Worker(window.URL.createObjectURL(blob));
}
