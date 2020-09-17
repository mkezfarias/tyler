
## Tyler Vawser's personal website
<img src="https://imgur.com/2VQVIOJ.png">

#### Tyler Vawser's personal website. The website includes a CMS to write blog posts. Template from gatsby-personal-starter-blog
Stack: Gatsby, React, Netlify

## Dependencies 
- gatsby-plugin-transition-link (for transitions)
- gatsby-plugin-dark-mode (for dark mode)
- bootstrap (for styles)
- gatsby-plugin-next-seo (for SEO)
- gatsby-plugin-mailchimp (for mailing lists)
- gatsby-plugin-google-fonts (for fonts)
- TypewriterJS v2 (for typewritter effect)


## 🚀 Quick start

1.  **Clone the repo locally**

    from the command line
    ```sh
    #to create your parent directory
    $ mkdir projects
    $ cd projects
    $ git clone git@github.com:TylerVawser/TylerVawserSite.git
    $ cd TylerVawserSite
    ```

2.  **Installs**

    Make sure you are in TylerVawserSite folder, and you have npm and node installed in your system

    
    ```sh
    #To install all the dependencies and npm modules
    $ npm install
    ```
    
    
    ```sh
    To run the appat locally    
    $ gatsby develop
    ```
    
    Your site is now running at `http://localhost:8000`! Open your browser and go to localhost:8000 to see it live, it will reload when you make changes
    

3.  **Git**
    It's recommended to work on a different branch when making changes, to create a new branch based on master, use this command while on master
    
    ```sh
    $ git checkout -b "new-branch-name"
    ```
    
    When your changes are working locally and you want to push them to netlify, follow the follwing steps
    
     ```sh
    $ git add .
    $ git commit -m "Commit Message"
    $ git push origin "new-branch-name"
    ```
   Once you are done with the pushing and are finally ready to merge, go to https://github.com/TylerVawser/TylerVawserSite/
   1. Create a pull request from "new-branch-name" to "master"
   2. Wait for the netlify checks to pass before merging to master, if they are not passign, it means there's something wrong with the code, you can read the  
   netliy log for more details, but it's usually syntax errors or non oudated/deprecated/non-compatible dependencies being used.
   3. Click merge pull request, you may delete the branch or keep it
    
