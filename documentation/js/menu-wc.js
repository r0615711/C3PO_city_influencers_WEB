'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">webapp-city-influencers documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-18ef343bbc51c174518a163f5729bc6cebdbec9e6aa268e85faa6c193cae4b95905e7b5f294bf294d23d0140124436b45de361cad86d46045288ad7792663193"' : 'data-target="#xs-components-links-module-AppModule-18ef343bbc51c174518a163f5729bc6cebdbec9e6aa268e85faa6c193cae4b95905e7b5f294bf294d23d0140124436b45de361cad86d46045288ad7792663193"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-18ef343bbc51c174518a163f5729bc6cebdbec9e6aa268e85faa6c193cae4b95905e7b5f294bf294d23d0140124436b45de361cad86d46045288ad7792663193"' :
                                            'id="xs-components-links-module-AppModule-18ef343bbc51c174518a163f5729bc6cebdbec9e6aa268e85faa6c193cae4b95905e7b5f294bf294d23d0140124436b45de361cad86d46045288ad7792663193"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChampaingModule.html" data-type="entity-link" >ChampaingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChampaingModule-75d65c2dec2beeb61ac1750d9e71404858d7e4c3be5ea36ed645622ad9ad0f5111d17e5e740cbb6ffa42c0ee1059a7e55bd933fc27c7e1795fb138cc7ccf8c5a"' : 'data-target="#xs-components-links-module-ChampaingModule-75d65c2dec2beeb61ac1750d9e71404858d7e4c3be5ea36ed645622ad9ad0f5111d17e5e740cbb6ffa42c0ee1059a7e55bd933fc27c7e1795fb138cc7ccf8c5a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChampaingModule-75d65c2dec2beeb61ac1750d9e71404858d7e4c3be5ea36ed645622ad9ad0f5111d17e5e740cbb6ffa42c0ee1059a7e55bd933fc27c7e1795fb138cc7ccf8c5a"' :
                                            'id="xs-components-links-module-ChampaingModule-75d65c2dec2beeb61ac1750d9e71404858d7e4c3be5ea36ed645622ad9ad0f5111d17e5e740cbb6ffa42c0ee1059a7e55bd933fc27c7e1795fb138cc7ccf8c5a"' }>
                                            <li class="link">
                                                <a href="components/CampagneListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CampagneListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InfluencerModule.html" data-type="entity-link" >InfluencerModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-ed4e065a111eb7794a95fc0bd9fd731dedf1d1a3e968808bea273107d62181933952865d61e39ff5224c7ed8d20e58f66562d4dcdb89c5b3d97ed72eca216c08"' : 'data-target="#xs-components-links-module-UserModule-ed4e065a111eb7794a95fc0bd9fd731dedf1d1a3e968808bea273107d62181933952865d61e39ff5224c7ed8d20e58f66562d4dcdb89c5b3d97ed72eca216c08"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-ed4e065a111eb7794a95fc0bd9fd731dedf1d1a3e968808bea273107d62181933952865d61e39ff5224c7ed8d20e58f66562d4dcdb89c5b3d97ed72eca216c08"' :
                                            'id="xs-components-links-module-UserModule-ed4e065a111eb7794a95fc0bd9fd731dedf1d1a3e968808bea273107d62181933952865d61e39ff5224c7ed8d20e58f66562d4dcdb89c5b3d97ed72eca216c08"' }>
                                            <li class="link">
                                                <a href="components/UserListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-ed4e065a111eb7794a95fc0bd9fd731dedf1d1a3e968808bea273107d62181933952865d61e39ff5224c7ed8d20e58f66562d4dcdb89c5b3d97ed72eca216c08"' : 'data-target="#xs-injectables-links-module-UserModule-ed4e065a111eb7794a95fc0bd9fd731dedf1d1a3e968808bea273107d62181933952865d61e39ff5224c7ed8d20e58f66562d4dcdb89c5b3d97ed72eca216c08"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-ed4e065a111eb7794a95fc0bd9fd731dedf1d1a3e968808bea273107d62181933952865d61e39ff5224c7ed8d20e58f66562d4dcdb89c5b3d97ed72eca216c08"' :
                                        'id="xs-injectables-links-module-UserModule-ed4e065a111eb7794a95fc0bd9fd731dedf1d1a3e968808bea273107d62181933952865d61e39ff5224c7ed8d20e58f66562d4dcdb89c5b3d97ed72eca216c08"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/InfluencerListComponent.html" data-type="entity-link" >InfluencerListComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});