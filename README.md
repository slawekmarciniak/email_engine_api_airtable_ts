Email engine with interface.

[click & check codesandbox](https://codesandbox.io/s/github/slawekmarciniak/email_engine_api_airtable_ts_redux)

Technologies:

- [x] React, Typescript, JavaScript
- [x] Database: airtable
- [x] Fetch & Axios
- [x] Mailgun
- [x] Material-UI & CSS

With this app is possible to add subscribers and campaigns to airtable databases.

SUBSCRIBERS is element with all users, and is connected with database.

CAMPAIGNS is second working database, it allows to store all send campaigns and drafts.

Create campaign is place for sending email. It is connected with mailgun - (transactional email api for developers https://www.mailgun.com/)

Every mail is send to all subscribers and then is stored in campaign database as send or draft.

Every draft can be deleted or edit and send.

Mailgun engine is disabled (commented) for this task (basic subscription plan).

But all code is inside mailgun folder, is tested and its ready to use in my future projects.
