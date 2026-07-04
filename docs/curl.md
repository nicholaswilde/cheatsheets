---
tags:
  - cli
  - networking
  - http
---

# curl

Command-line tool for transferring data with URLs (https://curl.se)

!!! info "To make a basic GET request"
    ```bash
    curl <url>
    ```

!!! info "To follow redirects"
    ```bash
    curl -L <url>
    ```

!!! info "To save output to a file"
    ```bash
    curl -o <file> <url>
    ```

!!! info "To save output using the remote filename"
    ```bash
    curl -O <url>
    ```

!!! info "To download silently (no progress bar)"
    ```bash
    curl -sO <url>
    ```

!!! info "To make a POST request with JSON body"
    ```bash
    curl -X POST <url> \
      -H "Content-Type: application/json" \
      -d '{"key": "value"}'
    ```

!!! info "To make a POST request with form data"
    ```bash
    curl -X POST <url> -d "param1=value1&param2=value2"
    ```

!!! info "To make a PUT request"
    ```bash
    curl -X PUT <url> -H "Content-Type: application/json" -d '{"key": "value"}'
    ```

!!! info "To make a DELETE request"
    ```bash
    curl -X DELETE <url>
    ```

!!! info "To add a custom header"
    ```bash
    curl -H "Authorization: Bearer <token>" <url>
    ```

!!! info "To use basic authentication"
    ```bash
    curl -u <username>:<password> <url>
    ```

!!! info "To show response headers only"
    ```bash
    curl -I <url>
    ```

!!! info "To show both request and response headers (verbose)"
    ```bash
    curl -v <url>
    ```

!!! info "To suppress output, show only HTTP status code"
    curl -s -o /dev/null -w "%{http_code}" <url>
    To set a timeout (seconds):

    ```bash
    curl --max-time 10 <url>
    ```

!!! info "To retry on failure"
    ```bash
    curl --retry 3 --retry-delay 2 <url>
    ```

!!! info "To use a proxy"
    ```bash
    curl -x http://<proxy-host>:<port> <url>
    ```

!!! info "To skip SSL certificate verification (insecure)"
    ```bash
    curl -k <url>
    ```

!!! info "To specify a custom CA certificate"
    ```bash
    curl --cacert <ca-cert.pem> <url>
    ```

!!! info "To send a file as multipart form data"
    ```bash
    curl -F "file=@<path/to/file>" <url>
    ```

!!! info "To pipe output to jq for JSON parsing"
    ```bash
    curl -s <url> | jq '.'
    ```

!!! info "To upload a file with PUT"
    ```bash
    curl -T <file> <url>
    ```

!!! info "To resume a partial download"
    ```bash
    curl -C - -O <url>
    ```

!!! info "To limit download speed (bytes/sec)"
    ```bash
    curl --limit-rate 100K -O <url>
    ```

!!! info "To make a request with a cookie"
    ```bash
    curl -b "name=value" <url>
    ```

!!! info "To save and reuse cookies"
    ```bash
    curl -c cookies.txt -b cookies.txt <url>
    ```

!!! info "To send a request and write headers to a file"
    ```bash
    curl -D headers.txt <url>
    ```

!!! info "To use HTTP/2"
    ```bash
    curl --http2 <url>
    ```

!!! info "To check the effective URL after redirects"
    curl -Ls -o /dev/null -w "%{url_effective}" <url>
    To use a specific network interface:

    ```bash
    curl --interface eth0 <url>
    ```

!!! info "To make a GitHub API request"
    ```bash
    curl -s -H "Authorization: Bearer <token>" \
      "https://api.github.com/repos/<owner>/<repo>/releases/latest" | jq '.tag_name'
    ```
