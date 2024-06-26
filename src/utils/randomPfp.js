export const pfpSourceLinkBeam = "https://source.boringavatars.com/beam/";
export const pfpSourceLinkBeamMarble = "https://source.boringavatars.com/marble/";
export const pfpSourceLinkEmoji = "https://api.dicebear.com/8.x/fun-emoji/svg/";

import { Image } from '@mantine/core';

export const generatePfp = (pfpType) => {

    const randomId = Math.floor(Math.random() * 999);

    const getBaseUrl = (pfpType) => {
        switch (pfpType) {
            case "marble":
                return pfpSourceLinkBeamMarble
            case "beam":
                return pfpSourceLinkBeam
            default:
                return pfpSourceLinkEmoji
        }
    }

    return getBaseUrl(pfpType) + randomId;
}

export const generatePfpUrls = (numOfUrls, type) => {
    const urlArray = [];

    while (urlArray.length <= numOfUrls) {
        const generatedPfpUrl = generatePfp(type);
        urlArray.push(generatedPfpUrl);
    }

    let currentUrlIndex = 0;

    return {
        getUrl: () => {
            if (currentUrlIndex < numOfUrls) {
                currentUrlIndex++;
                return urlArray[currentUrlIndex - 1];
            } else return urlArray[Math.random() * numOfUrls]
        },
        getAllUrls: () => urlArray
    }
}