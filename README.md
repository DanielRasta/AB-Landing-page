# AB-Landing-page
A/B..n testing for multiple campaigns and lead generation

It's a small (free and open source) system to help you do the following:
1. Track offering of ads in FB - that's by Mark Zukerberg, not me :)
2. Display different landing pages for different offerings
3. "Color" the users for future remarketing
4. Collect leads

It's all developed in NodeJS and can be of use to any startup company.


### Let's walk through an example...

I have a company that makes sweet red apples!

__Imagine two ads on facebook:__
1. Buy the reddest apples in the market
with the link: https://<YOUR_SERVER>/?landingpage=2

2. Buy the sweetest apples in the market
with the link: https://<YOUR_SERVER>/?landingpage=3

__Now, once you click on one of the ads, two things will happen:__
1. The ad you didn't clicked on, will disappear from your facebook
2. I can retarget your facebook profile, and offer you more of the same offering that you already have.

__And if you decide the offering is worth your email..__
You just got into my mailing list on mailchimp, with the indication of which landing page got you there :)

### Configuration
` { 
  cookie: {
    secret: "super_secret_string",
  },
  mailchimp: {
    api_key: "XXXX",
    list_id: "YYYY",
  }
};`

mailchimp.api_key is from mailchimp account-> extras -> API keys -> Create new
mailchimp.list_id is from mailchimp list-> settings -> list name and defulats -> List ID
