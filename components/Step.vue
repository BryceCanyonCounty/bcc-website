<template>
    <div class="w-80 mx-auto mt-8">
        <div class="bg-gray-200 h-1 flex items-center justify-between">
            <div :class="`w-1/3 bg-${stageTwo ? 'primary' : 'white'} h-1 flex items-center`">
                <div class="bg-primary h-6 w-6 rounded-full shadow flex items-center justify-center tooltip" data-tip="Backlog">
                    <svg class="text-white fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M248 0H208c-26.5 0-48 21.5-48 48V160c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48H328V80c0 8.8-7.2 16-16 16H264c-8.8 0-16-7.2-16-16V0zM64 256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H184v80c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V256H64zM352 512H512c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H472v80c0 8.8-7.2 16-16 16H408c-8.8 0-16-7.2-16-16V256H352c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2V464c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z" />
                    </svg>
                </div>
            </div>
            <div :class="`w-1/3 flex justify-between bg-${stageThree ? 'primary' : 'white'} h-1 items-center relative`">
                <div :class="`bg-${stageTwo ? 'primary' : 'white'} h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2 tooltip`" data-tip="Developing"  :style="`${stageTwo ? '' : 'background-color: white;'}`">
                    <svg :class="`text-${stageTwo  ? 'white' : 'primary'} fill-current h-4 w-4`" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M640 0V400c0 61.9-50.1 112-112 112c-61 0-110.5-48.7-112-109.3L48.4 502.9c-17.1 4.6-34.6-5.4-39.3-22.5s5.4-34.6 22.5-39.3L352 353.8V64c0-35.3 28.7-64 64-64H640zM576 400a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM23.1 207.7c-4.6-17.1 5.6-34.6 22.6-39.2l46.4-12.4 20.7 77.3c2.3 8.5 11.1 13.6 19.6 11.3l30.9-8.3c8.5-2.3 13.6-11.1 11.3-19.6l-20.7-77.3 46.4-12.4c17.1-4.6 34.6 5.6 39.2 22.6l41.4 154.5c4.6 17.1-5.6 34.6-22.6 39.2L103.7 384.9c-17.1 4.6-34.6-5.6-39.2-22.6L23.1 207.7z" />
                    </svg>
                </div>
                <div :class="`bg-${stageThree ? 'primary' : 'white'} h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative tooltip`" data-tip="Reviewing"  :style="`${stageThree ? '' : 'background-color: white;'}`">
                    <svg :class="`text-${stageThree  ? 'white' : 'primary'} fill-current h-4 w-4`" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
                    </svg>
                </div>
            </div>
            <div :class="`bg-${stageFour? 'primary' : 'white'} w-1/3 h-1 flex justify-end`">
                <div :class="`bg-${stageFour? 'primary' : 'white'} h-6 w-6 rounded-full shadow flex justify-center items-center -mt-2.5 tooltip`" data-tip="Released"  :style="`${stageFour ? '' : 'background-color: white;'}`">
                    <svg :class="`text-${stageFour  ? 'white' : 'primary'} fill-current h-4 w-4`" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    name: 'Stats',
    props: {
        stage: String
    },
    data() {
        return {
            stages: [
                'backlog',
                'development',
                'reviewing',
                'released'
            ]
        };
    },
    computed: {
        stageTwo() {
            let currentstage = this.stages.findIndex((el) => {
                return el === this.stage
            })
            return currentstage >= 1
        },
        stageThree() {
            let currentstage = this.stages.findIndex((el) => {
                return el === this.stage
            })
            return currentstage >= 2
        },
        stageFour() {
            let currentstage = this.stages.findIndex((el) => {
                return el === this.stage
            })
            return currentstage >= 3
        },
    }
};
</script>