# Cherry Testimonials
A testimonials management plugin for WordPress.

## Features
* CPT Testimonials
* Page template (named Testimonials) + single template
* Widget (named Cherry Testimonials Widget)
* Shortcode (named cherry_testimonials)
* 20+ custom hooks
* Translation (Localization)

## How to use

#### In a post/page
Insert a shortcode `[cherry_testimonials]` to the post/page content.

#### In a page template
Fire the action *'cherry_get_testimonials'*. Example:
```
	do_action( 'cherry_get_testimonials' );
```

#### In a sidebar
Just drop widget to the your sidebar.

## Help
Found a bug? Feature requests? [Create an issue - Thanks!](https://github.com/cheh/cherry-testimonials/issues/new)