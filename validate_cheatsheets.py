def validate_content(content: str) -> list[str]:
    errors = []
    lines = content.splitlines()
    if not lines:
        return errors
    
    end_idx = -1
    # Check if there is front matter
    if lines[0].strip() == '---':
        for i in range(1, len(lines)):
            if lines[i].strip() == '---':
                end_idx = i
                break
        if end_idx == -1:
            errors.append("Malformed front matter: missing closing '---'")
            return errors
        
        # Parse front matter lines
        front_matter_lines = lines[1:end_idx]
        
        parsed = {}
        current_key = None
        
        for line in front_matter_lines:
            stripped = line.strip()
            if not stripped or stripped.startswith('#'):
                continue
            
            # Check for list items
            if line.startswith('  - ') or line.startswith('    - '):
                val = line.split('-', 1)[1].strip()
                if current_key:
                    if not isinstance(parsed[current_key], list):
                        if parsed[current_key] is None or parsed[current_key] == '':
                            parsed[current_key] = []
                        else:
                            parsed[current_key] = [parsed[current_key]]
                    parsed[current_key].append(val)
                else:
                    errors.append("YAML Syntax Error: list item without a key")
            elif ':' in line:
                key, val = line.split(':', 1)
                key = key.strip()
                val = val.strip()
                current_key = key
                
                # Check for syntax errors like unclosed flow collection
                if (val.startswith('[') and not val.endswith(']')) or (val.startswith('{') and not val.endswith('}')):
                    errors.append(f"YAML Syntax Error: unclosed flow collection '{val}'")
                    parsed[key] = val
                elif not val:
                    parsed[key] = None
                else:
                    parsed[key] = val
            else:
                errors.append(f"YAML Syntax Error: invalid line '{line}'")
        
        # Validate required fields
        if 'syntax' not in parsed:
            errors.append("Missing 'syntax' field in front matter")
        elif not parsed['syntax']:
            errors.append("'syntax' field cannot be empty")
            
        if 'tags' not in parsed:
            errors.append("Missing 'tags' field in front matter")
        else:
            tags_val = parsed['tags']
            if not isinstance(tags_val, list):
                errors.append("'tags' must be a list")
                
    # Structure and layout checks
    scan_start = end_idx + 1
    last_type = None
    
    for i in range(scan_start, len(lines)):
        line = lines[i].rstrip('\n')
        stripped = line.strip()
        if not stripped:
            continue
            
        if line.startswith('##'):
            last_type = 'heading'
        elif line.startswith('# '):
            last_type = 'description'
        elif line.startswith('#'):
            last_type = 'comment'
        else:
            # It's a command
            if last_type not in ('description', 'command'):
                errors.append(f"Line {i+1}: Command without description: '{stripped}'")
            last_type = 'command'
            
    return errors

