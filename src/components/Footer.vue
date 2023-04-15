<template>
    <footer class="footer footer-center p-10 bg-base-100 text-base-content">
        <div>
            <p class="font-medium mb-4">
                Bryce Canyon County Scripts is not affiliated with or endorsed by Rockstar North, Take-Two Interactive or other rightsholders. Any trademarks used belong to their respective owners.
            </p>

            <!-- <p class="font-bold">
                Site created by <a href="https://github.com/AndrewR3K" target="_blank"
                    class="link link-primary">bytesizd</a>
            </p> -->
            <p>Copyright © 2023 - All right reserved. The website content is licensed CC BY NC SA 4.0.</p>
            <p><a href="https://github.com/BryceCanyonCounty/bcc-website" target="_blank" class="link link-primary">{{ version }}</a></p>
        </div>
    </footer>
</template>

<script>
import pkg from '../../package.json'
export default {
    name: 'FooterComp',
    data() {
        return {
            version: pkg.version || '0.0.0'
        }
    }
};
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>