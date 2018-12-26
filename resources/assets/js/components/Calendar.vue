
<template>
    <div>
        <p>
            Here is the demo of vue-fullcalendar, no jquery fullcalendar.js required!
        </p>
        <full-calendar class="test-fc" :events="fcEvents"
                       first-day='1' locale="fr"
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

    import FullCalendar from 'vue-full-calendar'
    import 'fullcalendar/dist/fullcalendar.css'

    let demoEvents = [
        {
            title    : 'Sunny 725-727',
            start    : '2017-02-25',
            end      : '2017-02-27',
            cssClass : 'family'
        },
        {
            title : 'Lunfel 726-727',
            start : '2017-02-26',
            end : '2017-02-27',
            cssClass : ['home', 'work']
        },
        {
            title : 'Lunfel 2/27-2/28',
            start : '2017-02-27',
            end : '2017-02-28'
        },
        {
            title : 'Lunfel 2/27-2/28',
            start : '2017-02-27',
            end : '2017-02-28'
        },
        {
            title : 'Lunfel 2/27-2/28',
            start : '2017-02-27',
            end : '2017-02-28'
        },
        {
            title : 'Lunfel 2/26-3/05',
            start : '2017-02-26',
            end : '2017-03-05'
        },
        {
            title : 'Lunfel 1/27-1/28',
            start : '2017-01-27',
            end : '2017-01-28'
        },
        {
            title : 'Lunfel 1/27-2/2',
            start : '2017-01-27',
            end : '2017-02-02'
        },
        {
            title : 'Lunfel 3/27-3/28',
            start : '2017-03-27',
            end : '2017-03-28'
        },
    ];

    export default {
        data () {
            return {
                name:'Sunny!',
                fcEvents : demoEvents
            }
        },
        methods : {
            'changeMonth' (start, end, current) {
                console.log('changeMonth', start.format(), end.format(), current.format())
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
        components : {
            'full-calendar' : FullCalendar
        }
    }
</script>

<style>
    .red {
        background: rgb(235, 77, 77) !important;
        color: whitesmoke !important;
    }
    .blue {
        background: rgb(59, 59, 163) !important;
        color: whitesmoke !important;
    }
    .orange {
        background: orange !important;
        color: white !important;
    }
    .green {
        background: rgb(49, 155, 49) !important;
        color: white !important;
    }
    .blue,
    .orange,
    .red,
    .green {
        font-size: 13px;
        font-weight: 500;
        text-transform: capitalize;
    }
    .event-item {
        padding: 2px 0 2px 4px !important;
    }
</style>