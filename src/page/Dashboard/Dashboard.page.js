import React, {Component} from 'react';
import styles from './dashboard.module.scss';
import logo from 'assets/images/dipella_icon.png';
import {InputSearch} from "../../components";
import {Helmet} from "react-helmet";
import defaultStyle from 'assets/styles/defalut.module.scss';
import mobileImage from 'assets/images/mobile-phone-min.jpg';

class Dashboard extends Component {
    rigth;

    render() {
        return (
            <>
                <Helmet>
                    <title> Diprella | Dashboard </title>
                </Helmet>
                <div className={defaultStyle.container}>
                    <div className={styles.topsite}>
                        <div className={styles.topsite__icon}>
                            <figure className={styles.topsite__icon__figure}>
                                <img src={logo} alt="logo"/>
                            </figure>
                            <span className={styles.topsite__icon__title}> Diprella </span>
                        </div>
                        <InputSearch name='search'/>
                    </div>
                </div>
                <hr/>
                <main className={defaultStyle.container}>
                    <h1 className={styles.main__title}> Unlimited Access to Over 15,000 Courses </h1>
                    <ul className={styles.main__ul}>
                        <li><a href="#"> Design </a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">HTML</a></li>
                        <li><a href="#">JavaScript </a></li>
                        <li><a href="#">Ruby</a></li>
                        <li><a href="#">WordPress</a></li>
                        <li><a href="#">Java</a></li>
                        <li><a href="#">Business</a></li>
                    </ul>
                    <div className={styles.main__cards}>
                        <div className={styles.main__cards__card}>
                            <div className={styles.main__cards__card__box}>
                                <figure className={styles.main__cards__card__box__figure}>
                                    <img src={mobileImage} alt="image"/>
                                </figure>
                                <div className={styles.main__cards__card__box__descriptions}>
                                    <span className={styles.main__cards__card__box__descriptions__title}> Design </span>
                                    <p className={styles.main__cards__card__box__descriptions__text}> How to Save UI
                                        Designer & Front-End Developers up to 50% of Their Time </p>
                                    <span
                                        className={styles.main__cards__card__box__descriptions__sub}> 12 Aug 2017 </span>
                                </div>
                            </div>
                            <div className={`${styles.main__cards__card__box} ${styles.rigthcard}`}>
                                <div className={styles.rigthcard__div}>
                                    <figure className={styles.main__cards__card__box__figure}>
                                        <img src={mobileImage} alt="image"/>
                                    </figure>
                                    <div className={styles.main__cards__card__box__descriptions}>
                                        <span style={{'color': '#000'}}
                                              className={styles.main__cards__card__box__descriptions__title}> Selecto </span>
                                        <p className={styles.main__cards__card__box__descriptions__text}> IR-Company </p>
                                    </div>
                                </div>
                                <div>
                                    <span className={styles.rigthcard__text}> Free </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.main__cards__card}>
                            <div className={styles.main__cards__card__box}>
                                <figure className={styles.main__cards__card__box__figure}>
                                    <img src={mobileImage} alt="image"/>
                                </figure>
                                <div className={styles.main__cards__card__box__descriptions}>
                                    <span className={styles.main__cards__card__box__descriptions__title}> Design </span>
                                    <p className={styles.main__cards__card__box__descriptions__text}> How to Save UI
                                        Designer & Front-End Developers up to 50% of Their Time </p>
                                    <span
                                        className={styles.main__cards__card__box__descriptions__sub}> 12 Aug 2017 </span>
                                </div>
                            </div>
                            <div className={`${styles.main__cards__card__box} ${styles.rigthcard}`}>
                                <div className={styles.rigthcard__div}>
                                    <figure className={styles.main__cards__card__box__figure}>
                                        <img src={mobileImage} alt="image"/>
                                    </figure>
                                    <div className={styles.main__cards__card__box__descriptions}>
                                        <span style={{'color': '#000'}}
                                              className={styles.main__cards__card__box__descriptions__title}> Selecto </span>
                                        <p className={styles.main__cards__card__box__descriptions__text}> IR-Company </p>
                                    </div>
                                </div>
                                <div>
                                    <span className={styles.rigthcard__text}> Free </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.main__cards__card}>
                            <div className={styles.main__cards__card__box}>
                                <figure className={styles.main__cards__card__box__figure}>
                                    <img src={mobileImage} alt="image"/>
                                </figure>
                                <div className={styles.main__cards__card__box__descriptions}>
                                    <span className={styles.main__cards__card__box__descriptions__title}> Design </span>
                                    <p className={styles.main__cards__card__box__descriptions__text}> How to Save UI
                                        Designer & Front-End Developers up to 50% of Their Time </p>
                                    <span
                                        className={styles.main__cards__card__box__descriptions__sub}> 12 Aug 2017 </span>
                                </div>
                            </div>
                            <div className={`${styles.main__cards__card__box} ${styles.rigthcard}`}>
                                <div className={styles.rigthcard__div}>
                                    <figure className={styles.main__cards__card__box__figure}>
                                        <img src={mobileImage} alt="image"/>
                                    </figure>
                                    <div className={styles.main__cards__card__box__descriptions}>
                                        <span style={{'color': '#000'}}
                                              className={styles.main__cards__card__box__descriptions__title}> Selecto </span>
                                        <p className={styles.main__cards__card__box__descriptions__text}> IR-Company </p>
                                    </div>
                                </div>
                                <div>
                                    <span className={styles.rigthcard__text}> Free </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.main__cards__card}>
                            <div className={styles.main__cards__card__box}>
                                <figure className={styles.main__cards__card__box__figure}>
                                    <img src={mobileImage} alt="image"/>
                                </figure>
                                <div className={styles.main__cards__card__box__descriptions}>
                                    <span className={styles.main__cards__card__box__descriptions__title}> Design </span>
                                    <p className={styles.main__cards__card__box__descriptions__text}> How to Save UI
                                        Designer & Front-End Developers up to 50% of Their Time </p>
                                    <span
                                        className={styles.main__cards__card__box__descriptions__sub}> 12 Aug 2017 </span>
                                </div>
                            </div>
                            <div className={`${styles.main__cards__card__box} ${styles.rigthcard}`}>
                                <div className={styles.rigthcard__div}>
                                    <figure className={styles.main__cards__card__box__figure}>
                                        <img src={mobileImage} alt="image"/>
                                    </figure>
                                    <div className={styles.main__cards__card__box__descriptions}>
                                        <span style={{'color': '#000'}}
                                              className={styles.main__cards__card__box__descriptions__title}> Selecto </span>
                                        <p className={styles.main__cards__card__box__descriptions__text}> IR-Company </p>
                                    </div>
                                </div>
                                <div>
                                    <span className={styles.rigthcard__text}> Free </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export {Dashboard};