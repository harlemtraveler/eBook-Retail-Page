[_metadata_:title]:- "eBook Retail Page"
[_metadata_:author]:- "Mr. Robot"
[_metadata_:date]:- "December 28, 2018"

# eBook Retail Page

This application follows a tutorial on how to construct a payment form and integrating the **Stripe** API. It is a fairly simple project with the steps laid out in the commit history. References for the source of the tutorial and the author is provided below.

### Demo

[eBook Retail Page](https://simple-stripe-api-app.herokuapp.com)

### Tutorial

**Course:** [eBook Retail Page](https://www.youtube.com/watch?v=QT3_zT97_1g)
* **Instructor:** Brad Traversy
* **Duration:** 1 hour 1 minute 52 second on-demand video
* **Skill level:** Intermediate Level
* **Students:** N/A
* **Languages:** English
* **Lectures:** 1

## Getting Started

To follow this tutorial, simply click this [link](https://www.youtube.com/watch?v=QT3_zT97_1g).

### Prerequisites

To run this project, you'll need the following:
* A text-editor (Atom, Sublime Text, VS Code, etc)
* JavaScript Enabled on your device
* Node.JS
* NPM - Node Package Manager
* Stripe Account & API Keys
* An internet connection

### Installing

Please reference the associated links for each dependency package:

[Node.JS](https://nodejs.org/en/download/)
[NPM](https://docs.npmjs.com/getting-started/)

## Running the tests

No test required

## Deployment

Once development is complete you need to deploy the application. For the  purpose of this demo, we'll deploy to Heroku. You will need to have a Heroku account and the Heroku CLI installed prior to deployment.

The next step is to login Heroku via Heroku CLI and create a new application and link the local repository to the new remote Heroku repository. Run the below command and enter your Heroku credentials:

```
heroku login
```

Now create the new Heroku application. You can specify a name for the application by replacing *<optional-app-name-here>* in the command below with your desired name, or you can leave out the option (represented by the placeholder text: *<optional-app-name-here>*) and let Heroku generate a random name for you:

```
heroku create <optional-app-name-here>
```

Now we have to link the local repository to the remote Heroku repository. To do this, follow the below instructions:

### Link Local Repository to Heroku Remote Repository:

#### Quick Instructions to Link:

```
Heroku git:remote -a <your-application-name-here>
```

#### Detailed Instructions to Link:

* Navigate to the Herkou webpage and login your account.
* Locate the new app you just created in the Heroku CLI and click into it.
* In the menu tab for the Heroku application, select *Deploy*.
* Copy the line within the instructions that begins with (replace *<your-application-name-here>* with your application's name):

```
Heroku git:remote -a <your-application-name-here>
```

### Push Changes to Remote Heroku Repository

* Paste the command into your Terminal (while still within the root of the application).
* Stage and Commit any lingering changes within the local repository:

```
git add .
git commit -m 'Commit changes remaining for Heroku deployment'
```

* Push local repository to remote Heroku repository:

```
git push heroku master
```

* Deployment complete!

### View Your Application

Upon successful deployment, the Heroku CLI will return a link to the deployed application in the Terminal. You can either copy/paste this link in your browser, or simply run the following command in Terminal:

```
heroku open
```

## Built With

**Device:**
* [JavaScript]
* [Node.js]
* [Express.js]
* [Express-handlebars]
* [Stripe API]
* [Atom - Text Editor]

## Authors

* **Timothy Keaveny** - *Initial work* - [eBook Retail Page](https://github.com/harlemtraveler/eBook-Retail-Page)

See also the list of [contributors](https://github.com/harlemtraveler/eBook-Retail-Page/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Again, a huge thank you to [Brad Traversy](http://www.traversymedia.com/). Your tutorials are hands down the most compatible with my learning style. Keep it up!
