import React from 'react'
import './Blog.css';


function Blog() {
    return (
        <div className="body">
            <header>My Blog</header>

            <div className="subtext">

                <h1>First Blog</h1>
                <h3>An RSS feed. This crucial feature enables readers to add your blog to their RSS readers and be kept up-to-date as new content is published on your blog, without having to remember to visit your blog. There are numerous RSS directories that you can submit your blog’s RSS feed to. These directories not only help to widen you potential subscriber base, but also to help your blog get noticed by the Search Engines with valuable links back to your blog.</h3>
                <text>19 Nov 2020 11.59PM</text>
            </div>

            <div className="subtext">
                <h1>Second Blog</h1>
                <h3>Email subscription. Some people prefer to receive and read emails, so it’s a good idea to add this feature.  Google Feedburner provides you with the ability to add a widget to your blog that allows for users to either add your blog to their RSS reader of choice or receive your blog updates via email.</h3>
                <text>14 Nov 2020 11.59PM</text>
            </div>

            <div className="subtext">
                <h1>Third Blog</h1>
                <h3>Noticeable link to the Blog. If you have integrated a blog into your website, this point may sound silly, but you would be surprised at the number of websites that link to their blog from the footer of the page in small print. Don’t bury the link to your blog if you want people to read it - make it easy to find by preferably keeping a link to it above the page fold. Likewise, it is a great idea to include a few of your most recent posts on the homepage, linking through to the full post via the title for that blog post. By doing so you’ll entice new and returning visitors on your site to check out the rest of your post</h3>
                <text>12 Nov 2020 11.59PM</text>
            </div>

            <div className="subtext">
                <h1>Fourth Blog</h1>
                <h3>Blog categorisation system. New readers to your blog will often want to know what else you have written if they like your writing style, point of view etc. Archiving all of your old posts into clear categories helps readers find other posts of interest easily – much more user-friendly than being presented with ‘Page 1 of 12’ results to navigate. If you’re not sure what categories to include then read this post about how to choose categories for your blog.</h3>
                <text>10 Nov 2020 11.59PM</text>
            </div>
            <div className="subtext">
                <h1>Fifth Blog</h1>
                <h3>Social sharing buttons. Not having social media sharing icons on your blog posts severely limits how far and wide they can be shared. Include Facebook, Twitter, LinkedIn, Google+ and StumbleUpon to name but a few. All will help your blog posts to be seen by a larger audience if it is easily shared by readers via their social media profiles.</h3>
                <text>05 Nov 2020 11.59PM</text>
            </div>

        </div>
    )
}


export default Blog


