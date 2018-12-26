<template>
    <div>
        <h1>Rooster</h1>

        <p>
            Here is the demo of vue-fullcalendar, no jquery fullcalendar.js required!
        </p>
        <full-calendar class="test-fc"
                       :events="events"
                       :config="config"
                       first-day='0' locale="fr"
                       @changeMonth="changeMonth"
                       @eventClick="eventClick"
                       @dayClick="dayClick"
                       @moreClick="moreClick">
            <template slot="fc-event-card" scope="p">
                <p><i class="fa">sadfsd</i> {{ p.event.title }} test</p>
            </template>
        </full-calendar>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                events: [
                    {
                        title    : 'Sunny 725-727',
                        start    : '2017-02-25',
                        end      : '2017-02-27',
                        cssClass : 'family'
                    },
                    {
                        title : 'Lunfel 726-727',
                        start : '2019-02-26',
                        end : '2019-02-27',
                        cssClass : ['home', 'work']
                    },
                    {
                        title : 'Lunfel 2/27-2/28',
                        start : '2019-02-27',
                        end : '2019-02-28'
                    },
                    {
                        title : 'Lunfel 2/27-2/28',
                        start : '2019-02-27',
                        end : '2019-02-28'
                    },
                    {
                        title : 'Lunfel 2/27-2/28',
                        start : '2019-02-27',
                        end : '2019-02-28'
                    },
                    {
                        title : 'Lunfel 2/26-3/05',
                        start : '2019-02-26',
                        end : '2019-03-05'
                    },
                    {
                        title : 'Lunfel 1/27-1/28',
                        start : '2019-01-27',
                        end : '2019-01-28'
                    },
                    {
                        title : 'Lunfel 1/27-2/2',
                        start : '2019-01-27',
                        end : '2019-02-02'
                    },
                    {
                        title : 'Lunfel 3/27-3/28',
                        start : '2019-03-27',
                        end : '2019-03-28'
                    },
                ],
                config: {
                    defaultView: 'agendaWeek'
                },
            }
        },
        methods : {
            changeMonth (start, end, current) {
                console.log('changeMonth', start, end, current)
            },
            'eventClick' (event, jsEvent, pos) {
                console.log('eventClick', event, jsEvent, pos)
            },
            'dayClick' (day, jsEvent) {
                console.log('dayClick', day, jsEvent)
            },
            'moreClick' (day, events, jsEvent) {
                console.log('moreCLick', day, events, jsEvent)
            }
        },

    }
</script>

<style lang='scss'>
    .app{
        color:green;
    }
</style>