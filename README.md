Here in this example, we are exporting WrapperModule from angularShellApp to angularShell.

Issue here being described can occue in NGRX while using featureModule and effects using RootService which depends on ModuleService (so basically misused services).

* The Issue (from ShellApp)

Wrapper module is using a NonRoot service 'InjectableService' which depends on 'RootService'. Further 'RootService' depends on moduel service called here 'IssueService' (the service casuing issue).

- Now InjectableService is initialised as soon as we use it and provide it in provider but RootService is inialized, if used when app is bootstraping from root level. Third service here 'IssueService' is initalised when its module is used.

- - As soon as RootService is initialised, it expects the 'IssueService' is also injected to the env. but 'IssueService' Module is used in WrapperModule, so app when initialising root services, won't find this.
- - If we move IssueServiceModule to AppModule then exported WrapperModule would miss this service and would cause issue in ShellApp


## How to test
Go to respective folders and 
- install dependencies by `npm ci`
- start server by `ng serve` or `npm run start`