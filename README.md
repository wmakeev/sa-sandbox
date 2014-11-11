sa-sandbox
==========

Simple Sandbox for scaleApp

##sandbox.id
Instance Id

##sandbox.set(name, value)
Set value

##sandbox.get(name [, def])
Get value

 `name` - value key,
 `def` - default value

##sandbox.setModuleInfo(info)
Use this method on module init to set package.json. Usefull for some scaleApp plugins.

##sandbox.getModuleInfo([fieldName])
Provide access to module package.json. Usefull for some scaleApp plugins.