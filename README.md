#How to run
cd angularShellApp
npm ci 
ng serve

url: http://localhost:4201/


## Topic
Only wrapper module should have logger service as provider. 
As dialog is opened from wrapper component the context must be passed to opened dialog componet

## solution
Don't make DialogService as root service and provide it in providers of wrapper. Also use injector from service
- OR - 
keep it root but still provide in Wrapper module and use dialog injector from service