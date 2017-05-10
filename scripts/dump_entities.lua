/c
local out = ""

function write(...)
  local arg = {...}
  for i, v in ipairs(arg) do
    out = out .. tostring(v)
  end
end

function item_count(node)
  local count = 0
  for k, v in pairs(node) do
    count = count + 1
  end
  return count
end

function traverse_table(node)
  write("{")
  local i = 1
  local count = item_count(node)
  for k, v in pairs(node) do
    write("\"", tostring(k), "\": ")
    traverse(v)
    if i < count then
      write(",")
    end
    i = i + 1
  end
  write("}")
end

function traverse_array(node)
  local count = item_count(node)
  write("[")
  for k, v in ipairs(node) do
    traverse(v)
    if k < count then
      write(",")
    end
  end
  write("]")
end

function traverse(node)
  if type(node) == "table" then
    if type(next(node)) == "number" then
      traverse_array(node)
    else
      traverse_table(node)
    end
  elseif type(node) == "string" then
    write("\"", node, "\"")
  else
    write(node)
  end
end

function inspect_item(node)
  return {
    type=node.type,
    name=node.name,
    flags=node.flags,
    crafting_speed=node.crafting_speed,
    belt_speed=node.belt_speed,
    
  }
end


function inspect_all(items)
  local r = {}
  for k, v in pairs(items) do
    r[k] = inspect_item(v)
  end
  traverse(r)
end

inspect_all(game.entity_prototypes)

game.write_file("entities.json", out)