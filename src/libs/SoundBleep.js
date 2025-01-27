// SPDX-FileCopyrightText: 2016- 2020, Darren Whitlen <darren@kiwiirc.com>
// SPDX-License-Identifier: Apache-2.0

export class SoundBleep {
    constructor() {
        this.audio = document.createElement('audio');
        let source = document.createElement('source');

        if (this.audio.canPlayType('audio/mpeg;')) {
            source.type = 'audio/mpeg';
            source.src = 'static/highlight.mp3';
        } else {
            source.type = 'audio/ogg';
            source.src = 'static/highlight.ogg';
        }

        this.audio.appendChild(source);
    }

    play() {
        this.audio.play();
    }
}
