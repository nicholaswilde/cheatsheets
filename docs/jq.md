# jq

A lightweight and flexible command-line JSON processor.

!!! info "Output a JSON file, in pretty-print format"
    ```bash
    jq
    ```

!!! info "Output all elements from arrays"
    (or all key-value pairs from objects) in a JSON file:

    ```bash
    jq .[]
    ```

!!! info "Use jq to pretty-print JSON"
    ```bash
    jq '.' file.json
    ```

!!! info "Filter JSON object by extracting a specific field"
    ```bash
    jq '.fieldName' file.json
    ```

!!! info "Filter JSON array to extract specific element by index"
    ```bash
    jq '.[<index>]' file.json
    ```

!!! info "Select multiple fields from JSON"
    ```bash
    jq '{field1: .field1, field2: .field2}' file.json
    ```

!!! info "Use jq to count the number of elements in an array"
    ```bash
    jq '.arrayName | length' file.json
    ```

!!! info "Apply a function to each element in a JSON array"
    ```bash
    jq '.arrayName[] | .fieldName' file.json
    ```

!!! info "Parse JSON from stdin"
    ```bash
    cat file.json | jq '.fieldName'
    ```

!!! info "Use jq to filter JSON objects by condition"
    ```bash
    jq 'select(.fieldName == "value")' file.json
    ```

!!! info "Modify JSON field value"
    ```bash
    jq '.fieldName = "newValue"' file.json
    ```

!!! info "Load JSON from URL"
    ```bash
    curl -s "http://example.com/file.json" | jq '.fieldName'
    ```

!!! info "Combine operations and select elements from different levels"
    ```bash
    jq '.[] | {id: .id, name: .info.name}' file.json
    ```

!!! info "Query nested JSON data"
    ```bash
    jq '.outerField.innerField' file.json
    ```

!!! info "Concatenate fields"
    ```bash
    jq '.field1 + " " + .field2' file.json
    ```

!!! info "Group by a particular field"
    ```bash
    jq 'group_by(.fieldName)' file.json
    ```

!!! info "Sort JSON objects by field"
    ```bash
    jq 'sort_by(.fieldName)' file.json
    ```

!!! info "Use jq to find unique values"
    ```bash
    jq 'unique' file.json
    ```

!!! info "Print keys and values of a JSON object"
    ```bash
    jq 'to_entries | .[] | "\(.key): \(.value)"' file.json
    ```

!!! info "Output compact JSON without whitespace"
    ```bash
    jq -c '.' file.json
    ```

!!! info "Use jq to delete a field"
    ```bash
    jq 'del(.fieldName)' file.json
    ```

!!! info "Combine data from two JSON files"
    ```bash
    jq -s '.[0] + .[1]' file1.json file2.json
    ```

!!! info "Read JSON objects from a file into an array, and output it"
    (inverse of jq .[]):

    ```bash
    jq --slurp
    ```

!!! info "Output the first element in a JSON file"
    ```bash
    jq .[0]
    ```

!!! info "Output the value of a given key of the first element in a JSON file"
    ```bash
    jq .[0].key_name
    ```

!!! info "Output the value of a given key of each element in a JSON file"
    ```bash
    jq 'map(.key_name)'
    ```

!!! info ""
    [ { foo: 1 }, { foo: 2 } ]
    => [1, 2]
    Extract as stream of values instead of a list

    ```bash
    jq '.[] | .foo'
    ```

!!! info ""
    [ { "foo": 1 }, { "foo": 2 } ]
    => 1, 2
    Slicing

    ```bash
    jq '.[1:2]'
    ```

!!! info ""
    [ { "foo": 1 }, { "foo": 2 } ]
    => { "foo": 2 }
    Dictionary subset shorthand

    ```bash
    jq 'map({ a, b })'
    ```

!!! info ""
    [ { "a": 1, "b": 2, "c": 3 }, ...]
    => [ { "a": 1, "b": 2 }, ...]
    Converting arbitrary data to json

    ```bash
    jq -r '(map(keys) | add | unique | sort) as $cols \
            | .[] as $row | $cols | map($row[.]) | @csv'
    ```

!!! info ""
    [ { "foo": 1, "bar": 2}, { "foo": 3, "baz": 4}]
    
    => 2,,1
    ,4,3
    Filter a list of objects

    ```bash
    jq 'map(select(.name == "foo"))'
    ```

!!! info ""
    [ { "name": "foo" }, { "name": "bar" } ]
    => [ { "name": "foo" } ]
    
    ## mapping and transforming ##
    
    Add + 1 to all items

    ```bash
    jq 'map(.+1)'
    ```

!!! info "Delete 2 items"
    ```bash
    jq 'del(.[1, 2])'
    ```

!!! info "Concatenate arrays"
    ```bash
    jq 'add'
    ```

!!! info "Flatten an array"
    ```bash
    jq 'flatten'
    ```

!!! info ""
    [[1], [2]]
    => [1, 2]
    Create a range of numbers

    ```bash
    jq '[range(2;4)]'
    ```

!!! info "Display the type of each item"
    ```bash
    jq 'map(type)'
    ```

!!! info "Sort an array of basic type"
    ```bash
    jq 'sort'
    ```

!!! info ""
    [3, 2, 1]
    => [1, 2, 3]
    Sort an array of objects

    ```bash
    jq 'sort_by(.foo)'
    ```

!!! info "Sort lines of a file"
    ```bash
    jq --slurp '. | sort | .[]'
    ```

!!! info "Group by a key - opposite to flatten"
    ```bash
    jq 'group_by(.foo)'
    ```

!!! info "Minimum value of an array"
    ```bash
    jq 'min'
    ```

!!! info "See also min, max, min_by(path_exp), max_by(path_exp)"
    Remove duplicates

    ```bash
    jq 'unique'
    ```

!!! info "or"
    ```bash
    jq 'unique_by(.foo)'
    ```

!!! info "or"
    ```bash
    jq 'unique_by(length)'
    ```

!!! info ""
    [1, 1, 2, 1]
    => [1, 2]
    Reverse an array

    ```bash
    jq 'reverse'
    ```

!!! info ""
    ## jq in shell scripts ##
    
    URL Encode something

    ```bash
    date | jq -sRr @uri
    ```

!!! info "Thu%2021%20May%202020%2012%3A40%3A40%20PM%20CEST%0A"
    To create proper JSON from a shell script and properly escape variables:

    ```bash
    jq -n --arg foobaz "$FOOBAZ" '{"foobaz":$foobaz}'
    ```

!!! info "To fill environment variables from JSON object keys"
    (e.g. $FOO from jq query ".foo")

    ```bash
    export $(jq -r '@sh "FOO=\(.foo) BAZ=\(.baz)"')
    ```

!!! info ""
    ## Input/output formats ##
    
    Parsing json

    ```bash
    jq 'with_entries(.value |= fromjson)' --sort-keys
    ```

!!! info ""
    { "b": "{}", "a": "{}" }
    =>  { "a": {}, "b": {} }
    Serializing json
    

    ```bash
    jq 'with_entries(.value |= tojson)' --sort-keys
    ```

!!! info ""
    { "a": {}, "b": {} }
    => { "a": "{}", "b": "{}" }
    Converting to csv

    ```bash
    jq '.[] | [.foo, .bar] | @csv' -r
    ```


[{ "foo": 1, "bar": 2, "baz":3 }]
=> 1,2
