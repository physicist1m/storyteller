import React from 'react';

const {
    Provider: StoryTellerServiceProvider,
    Consumer: StoryTellerServiceConsumer
} = React.createContext();

export {
    StoryTellerServiceConsumer,
    StoryTellerServiceProvider
};