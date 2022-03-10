# How To Submit Your Project To The Ecosystem Page



Create a pull request to add your project to the Juno ecosystem page.

If you are adding a staking interface it must be pre-approved by the team and have significant unique features.

You must create your projects folder inside the projects folder.

Example:

projects/my-project-name/index.json
```
{
"name": "Test Project 1",
"type": "Contracts",
"image": "main-icon.png",
"state": 1,
"twitter_link": "twitter.com/junonetwork",
"tg_link": "t.me/junonetwork",
"address": "juno-smartcontract-address",
"github_link": "github-link",
"website_link": "https://junochain.com"
}
```
name: This is the name of your project

type: Choose one of the following:
Dapp, Contracts or Tools

image: This is the name of your projects thumbnail image that you should have in the same folder that the index.json is inside.

Ensure the image size is 120x120

example folder path:

projects/my-project-name/main-icon.png

state: keep this set to 1

twitter_link: This is a twitter link for your project (optional)

tg_link: This is a telegram link for your project (optional)

address: This is the address for your contract, not the entire URL. (optional)

github_link: This is the link for your github repo (optional)

website_link: This is the url for your website (optional)


