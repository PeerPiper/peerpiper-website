<script>
    import { expoOut } from "svelte/easing";
    import { expand, spin, spinOut } from "./custom.js";
    import { p, uparrow, downarrow } from "./shapes.js";
    import { onMount } from "svelte";

    let visible = false;
    let duration = 750;

    onMount(() => {
        visible = true;
    });

    const tweetUrl =
        "https://twitter.com/intent/tweet?url=" +
        "https://peerpiper.io" +
        "&text=" +
        encodeURIComponent(
            "Hey @DougAnderson444 can you make me a handle so I can use #peerpiper @PeerPiper? Thanks!"
        );
</script>

{#if visible}
    <div class="hero">
        <h1>Ways to Get Invited:</h1>
    </div>
    <div class="container">
        <!-- <div class="col">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290.6 290.6">
                <defs />
                <path
                    d="M276.6 51.6h-89.1v-9.4a42.2 42.2 0 10-83.3 9.4H14.1A14 14 0 000 65.6v178.2a14 14 0 0014 14h89.1v23.5H70.3v9.3h150v-9.3h-32.8v-23.5h89a14 14 0 0014.1-14V65.6a14 14 0 00-14-14zM178 281.3h-65.6v-23.5h65.6v23.4zm103.2-37.6c0 2.6-2.2 4.7-4.7 4.7H14a4.7 4.7 0 01-4.7-4.7V225h271.8v18.8zm0-28H9.3v-150c0-2.7 2.2-4.8 4.8-4.8h93.5a42.2 42.2 0 0037.7 23.5h14V75h-14a32.9 32.9 0 1132.8-32.8v11.7a7 7 0 01-14 0V42.2a18.8 18.8 0 10-8.9 15.9 16.4 16.4 0 0030.6 2.8h90.8c2.6 0 4.7 2.1 4.7 4.7v150zM154.7 42.1a9.4 9.4 0 11-18.8 0 9.4 9.4 0 0118.8 0z"
                />
                <path
                    d="M70.3 196.9h150V93.7h-150V197zm15.4-9.4l46.1-50 13.4 8.6 13.9-8.3 45.8 49.7H85.7zm125.2-7.3l-43.6-47.3 43.6-26.2v73.5zm-12.2-77l-53.3 32-49.8-32h103.1zm-119 .8l44.1 28.4-44.1 47.8V104z"
                />
            </svg>
        </div> -->
        <a href={tweetUrl} target="_blank">
            <div class="col">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 112.2 112.2"
                >
                    <defs />
                    <circle cx="56.1" cy="56.1" r="56.1" fill="#55acee" />
                    <path
                        fill="#f1f2f2"
                        d="M90.5 40.3c-2.4 1-5 1.8-7.7 2.1 2.7-1.6 4.9-4.3 5.9-7.4a26.8 26.8 0 01-8.6 3.3 13.4 13.4 0 00-22.8 12.2 38 38 0 01-27.6-14 13.4 13.4 0 004.1 17.9c-2.2 0-4.3-.7-6-1.7v.2c0 6.5 4.6 11.9 10.7 13.1a13.4 13.4 0 01-6 .3C34 71.6 39 75.5 45 75.6A26.9 26.9 0 0125 81c6 3.8 13 6 20.6 6a37.9 37.9 0 0038-39.8c2.7-2 5-4.3 6.8-7z"
                    />
                </svg>
            </div>
        </a>
        <div class="col">
            <span>or</span>
        </div>
        <div class="col">
            <!-- Begin Mailchimp Signup Form -->
            <link
                href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
                rel="stylesheet"
                type="text/css"
            />
            <style type="text/css">
                #mc_embed_signup {
                    background: #fff;
                    clear: left;
                    font: 14px Helvetica, Arial, sans-serif;
                }
                /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
            </style>
            <div id="mc_embed_signup">
                <form
                    action="https://PeerPiper.us4.list-manage.com/subscribe/post?u=68f88d6e8a4e581cb43d66661&amp;id=14ba97cdbf"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    class="validate"
                    target="_blank"
                    novalidate
                >
                    <div id="mc_embed_signup_scroll">
                        <label for="mce-EMAIL">Subscribe</label>
                        <input
                            type="email"
                            value=""
                            name="EMAIL"
                            class="email"
                            id="mce-EMAIL"
                            placeholder="email address"
                            required
                        />
                        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                        <div
                            style="position: absolute; left: -5000px;"
                            aria-hidden="true"
                        >
                            <input
                                type="text"
                                name="b_68f88d6e8a4e581cb43d66661_14ba97cdbf"
                                tabindex="-1"
                                value=""
                            />
                        </div>
                        <div class="clear">
                            <input
                                type="submit"
                                value="Subscribe"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                                class="button"
                            />
                        </div>
                    </div>
                </form>
            </div>

            <!--End mc_embed_signup-->
        </div>
    </div>
{/if}

<style>
    svg {
        width: 5rem;
        height: 5rem;
    }
    .container {
        width: auto;
        margin: 0.5rem auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .col {
        margin: 1rem;
        display: flex;
        flex-direction: row;
    }
    .hero {
        margin-top: 3rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        color: #525252;
    }

    h1 {
        font-weight: bold;
    }
</style>
