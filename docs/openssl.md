---
tags:
  - cli
  - security
  - crypto
---

# openssl

Cryptography toolkit and TLS/SSL library CLI (https://www.openssl.org)

!!! info "--- Key Generation ---"
    To generate a 2048-bit RSA private key:

    ```bash
    openssl genrsa -out <key>.pem 2048
    ```

!!! info "To generate a 4096-bit RSA private key (encrypted)"
    ```bash
    openssl genrsa -aes256 -out <key>.pem 4096
    ```

!!! info "To generate an EC private key (P-256)"
    ```bash
    openssl ecparam -name prime256v1 -genkey -noout -out <key>.pem
    ```

!!! info "--- CSR (Certificate Signing Request) ---"
    To generate a CSR from an existing key:

    ```bash
    openssl req -new -key <key>.pem -out <csr>.pem
    ```

!!! info "To generate a key and CSR in one step"
    ```bash
    openssl req -newkey rsa:2048 -nodes -keyout <key>.pem -out <csr>.pem
    ```

!!! info "To view a CSR"
    ```bash
    openssl req -text -noout -verify -in <csr>.pem
    ```

!!! info "--- Self-Signed Certificates ---"
    To generate a self-signed certificate (valid 365 days):

    ```bash
    openssl req -x509 -newkey rsa:4096 -nodes \
      -keyout <key>.pem -out <cert>.pem \
      -days 365 -subj "/CN=<hostname>"
    ```

!!! info "To generate a self-signed cert with SANs"
    ```bash
    openssl req -x509 -newkey rsa:4096 -nodes \
      -keyout <key>.pem -out <cert>.pem \
      -days 365 \
      -subj "/CN=<hostname>" \
      -addext "subjectAltName=DNS:<hostname>,IP:127.0.0.1"
    ```

!!! info "--- Inspecting Certificates ---"
    To view a certificate:

    ```bash
    openssl x509 -text -noout -in <cert>.pem
    ```

!!! info "To view certificate expiry date"
    ```bash
    openssl x509 -enddate -noout -in <cert>.pem
    ```

!!! info "To check a remote server's certificate"
    ```bash
    echo | openssl s_client -connect <host>:443 2>/dev/null | openssl x509 -text -noout
    ```

!!! info "To check certificate expiry of a remote host"
    ```bash
    echo | openssl s_client -connect <host>:443 2>/dev/null \
      | openssl x509 -noout -enddate
    ```

!!! info "To view a certificate chain"
    ```bash
    openssl s_client -connect <host>:443 -showcerts
    ```

!!! info "--- Encryption & Decryption ---"
    To encrypt a file with AES-256:

    ```bash
    openssl enc -aes-256-cbc -salt -pbkdf2 -in <file> -out <file>.enc
    ```

!!! info "To decrypt a file"
    ```bash
    openssl enc -d -aes-256-cbc -pbkdf2 -in <file>.enc -out <file>
    ```

!!! info "--- Hashing ---"
    To compute SHA-256 hash of a file:

    ```bash
    openssl dgst -sha256 <file>
    ```

!!! info "To compute MD5 hash"
    ```bash
    openssl dgst -md5 <file>
    ```

!!! info "--- Password Hashing ---"
    To generate a SHA-512 password hash:

    ```bash
    openssl passwd -6 <password>
    ```

!!! info "To generate a user:hash string for Raspberry Pi OS (userconf.txt)"
    ```bash
    echo "<username>:$(openssl passwd -6 <password>)"
    ```

!!! info "--- Random Data ---"
    To generate random bytes (hex):

    ```bash
    openssl rand -hex 32
    ```

!!! info "To generate random bytes (base64)"
    ```bash
    openssl rand -base64 48
    ```

!!! info "To generate a random password of specific length"
    ```bash
    openssl rand -base64 48 | cut -c1-16
    ```

!!! info "--- PEM / DER Conversion ---"
    To convert PEM to DER:

    ```bash
    openssl x509 -outform DER -in <cert>.pem -out <cert>.der
    ```

!!! info "To convert DER to PEM"
    ```bash
    openssl x509 -inform DER -in <cert>.der -out <cert>.pem
    ```

!!! info "--- PKCS ---"
    To create a PKCS#12 bundle (cert + key):

    ```bash
    openssl pkcs12 -export -out <bundle>.p12 -inkey <key>.pem -in <cert>.pem
    ```

!!! info "To extract cert from PKCS#12"
    ```bash
    openssl pkcs12 -in <bundle>.p12 -clcerts -nokeys -out <cert>.pem
    ```

!!! info "To extract key from PKCS#12"
    ```bash
    openssl pkcs12 -in <bundle>.p12 -nocerts -nodes -out <key>.pem
    ```

!!! info "--- Verification ---"
    To verify a certificate against a CA:

    ```bash
    openssl verify -CAfile <ca>.pem <cert>.pem
    ```

!!! info "To test an SSL connection"
    ```bash
    openssl s_client -connect <host>:<port>
    ```

!!! info "To test with a specific TLS version"
    ```bash
    openssl s_client -tls1_3 -connect <host>:443
    ```
