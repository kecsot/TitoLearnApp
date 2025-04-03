import React from "react";
import {Button} from "react-native-paper";
import {FallbackProps} from "react-error-boundary";
import AnimatedContentCard from "../AnimatedContentCard";
import {getAxiosErrorMessage, isAxiosError,} from "../../../api/axiosErrorUtil";


type Props = FallbackProps & {}

export default function ErrorFallbackComponent({error, resetErrorBoundary}: Props) {

    let title = 'Oops! Error happened!'
    let description = 'Please try again!'
    let lottieResource = '../../../../assets/lottie/error.json'

    if (isAxiosError(error)) {
        const errorMessage = getAxiosErrorMessage(error);

        title = errorMessage.title
        description = errorMessage.description
        // TODO lottieResource for network error
    } else {
        // TODO: log client errors. looks like its a bigger issue
    }

    return (
        <AnimatedContentCard
            title={title}
            description={description}
            lottieResource={require(lottieResource)}
            actionButtonsComponent={
                <Button
                    mode="outlined"
                    onPress={resetErrorBoundary}>Retry</Button>
            }/>
    );
}
