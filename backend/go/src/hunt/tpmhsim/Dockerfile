FROM golang:1.9.2-alpine3.6

RUN mkdir -p /go/src/hunt
ENV GOPATH=/go

ADD . /go/src/hunt/tpmhsim
WORKDIR /go/src/hunt/tpmhsim

RUN go build -o app .


FROM alpine:3.6

COPY --from=0 /go/src/hunt/tpmhsim/app /tpmhsim
CMD /tpmhsim

ENV PORT 8080
EXPOSE 8080
