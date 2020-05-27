# Verification

## Start dev server

```bash
# make sure that dependencies are installed
ng serve --open
```

## Verification steps

#### Case From > Quick Search

1. Go to [http://localhost:4200/case-from](http://localhost:4200/case-from).
1. Select `Quick Search` button. (Selected as default)

#### Case From > Quick Search > Case About

1. Go to [http://localhost:4200/case-from](http://localhost:4200/case-from).
1. Select `Quick Search` button. (Selected as default)
1. Set valid `NPI`, `Policy ID`, or `Plan to Plan`.
1. If you set `Plan to Plan`, just click `Continue to case about` button or `Case About` tab.
1. If not, click `Search` button and select specific row to continue to case about.

#### Case From > Quick Search > Member Validation

1. Go to [http://localhost:4200/case-from](http://localhost:4200/case-from).
1. Select `Quick Search` button. (Selected as default)
1. Set valid `Policy ID` to search and select specific member.
1. Click `Continue to validation`.

#### Case From > Member

1. Go to [http://localhost:4200/case-from](http://localhost:4200/case-from).
1. Select `Member` button.
1. Nothing show for now.

#### Case From > Provider

1. Go to [http://localhost:4200/case-from](http://localhost:4200/case-from).
1. Select `Provider` button.
1. Change provider type will display different fields.

#### Case From > Provider > Case About

1. Go to [http://localhost:4200/case-from](http://localhost:4200/case-from).
1. Select `Provider` button.
1. For `Contracted Provider` and `Provider Practice Location`, set valid criteria and click `Search` button to select specific row.
1. Click `Continue to case about` button or `Case About` tab to continue to case about.
1. For `Non-Contracted Provider`, set both `NPI` and `State` to continue to case about.

#### Case From > Producer

1. Go to [http://localhost:4200/case-from](http://localhost:4200/case-from).
1. Select `Producer` button.
1. Change producer type will display different fields.

#### Case From > Producer > Case About

1. Go to [http://localhost:4200/case-from](http://localhost:4200/case-from).
1. Select `Producer` button.
1. Select `Producer` option and set valid criteria. Then click `Search` to select specific row.
1. Click `Continue to case about` button or `Case About` tab to continue to case about. 

#### Case From > Producer > Validation

1. Go to [http://localhost:4200/case-from](http://localhost:4200/case-from).
1. Select `Producer` button.
1. Select `Producer Organization` option and set valid criteria. Then click `Search` to select specific row.
1. Click `Continue to validation` to validate.

#### Case From > Group

1. Go to [http://localhost:4200/case-from](http://localhost:4200/case-from).
1. Select `Group` button.
1. If `Subgroup ID` or `Subgroup Name` is set, result will be display Subgroup.
1. If `Subgroup ID` is set without `Group ID`, validation error will be displayed.

#### Case From > Group > Case About

1. Go to [http://localhost:4200/case-from](http://localhost:4200/case-from).
1. Select `Group` button.
1. Set valid criteria to search and select specific row.
1. Click `Continue to case about` button or `Case About` tab to continue to case about. 

#### Case From > Plan to Plan

1. Go to [http://localhost:4200/case-from](http://localhost:4200/case-from).
1. Select `Plan to Plan` button.

#### Case From > Plan to Plan > Case About

1. Go to [http://localhost:4200/case-from](http://localhost:4200/case-from).
1. Select `Plan to Plan` button.
1. Just set `Plan to Plan` field and click `Continue to case about` button or `Case About` tab.

#### Case From > Other

1. Go to [http://localhost:4200/case-from](http://localhost:4200/case-from).
1. Select `Other` button.
1. Table value will be populated by `Caller Name` and `Callback Number` that are placed in the top.
1. Button will be enabled when both `Caller Name` and `Callback Number` are set.

#### Case From > Other > Case About

1. Go to [http://localhost:4200/case-from](http://localhost:4200/case-from).
1. Select `Other` button.
1. Set valid `Caller Name` and `Callback Number` to continue to case about.

#### Case About > Validation

1. Please follow above guides to reach to case about page.
1. For `Member` option, set valid field to search and select specific member.
1. For `Non-Member` option, set `Non-Wellmark ID`.
1. If you get here by following `Case From > Other > Case About`, select specific option and set valid criteria for rendered form.
1. Click `Continue to validation` button.
