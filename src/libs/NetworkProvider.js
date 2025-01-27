// SPDX-FileCopyrightText: 2016- 2020, Darren Whitlen <darren@kiwiirc.com>
// SPDX-License-Identifier: Apache-2.0

'kiwi public';

import eventEmitter from 'event-emitter';

export default class NetworkProvider {
    constructor() {
        eventEmitter(this);
        this.providers = [];
    }

    addProvider(provider) {
        this.providers.push(provider);
        provider.on('networks', (networks) => {
            this.emit('networks', this.availableNetworks());
        });
    }

    availableNetworks() {
        let networks = Object.create(null);

        this.providers.forEach((provider) => {
            let pType = provider.type;
            if (provider.networks.length > 0) {
                networks[pType] = networks[pType] || [];
                networks[pType] = networks[pType].concat(provider.networks);
            }
        });

        return networks;
    }
}
