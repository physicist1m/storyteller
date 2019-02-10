import React from 'react';
import { StoryTellerServiceConsumer } from '../storyteller-service-context';

const withStoryTellerService = () => Wrapped => {

    return props => {
        return (
            <StoryTellerServiceConsumer>
                {
                    storyTellerService => {
                        return(<Wrapped {...props}
                               storyTellerService={storyTellerService}/>);
                    }
                }
            </StoryTellerServiceConsumer>
        );
    }
}

export default withStoryTellerService;