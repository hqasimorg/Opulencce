import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { Banner, SectionHandle } from '../../Components/Component'

const ReturnPolicySec = () => {

    const ReturnPolicySecContent = () => {
        return (
            <div className='PrivacyPolicySecContent'>
                <div className="privacyPolicySecContentHeading">
                    <h1>Return Policy</h1>
                </div>
                <div className="privacyPolicySecContentPara">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga libero eius laudantium sapiente quibusdam incidunt facilis minima, vero id distinctio autem! Aliquid sunt veritatis delectus? Dicta in qui tempora minima earum culpa obcaecati quia, praesentium et, alias possimus! Sint nulla culpa tenetur rem, itaque deserunt et? Ducimus iusto assumenda unde delectus ad placeat quam ea quos ipsam rerum voluptatem, iste, rem dicta, dolore in perferendis dolorem excepturi minus magnam magni. Totam sed nisi quia veniam odit voluptates nihil alias temporibus recusandae, nam facere illum optio incidunt iure esse quasi. Sequi reprehenderit deserunt similique at quo excepturi necessitatibus ducimus atque nulla.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <a href="#">Fuga libero</a> eius laudantium sapiente quibusdam incidunt facilis minima, vero id distinctio autem! Aliquid sunt veritatis delectus? Dicta in qui tempora minima earum culpa obcaecati quia, praesentium et, alias possimus! Sint nulla culpa tenetur rem, itaque deserunt et? Ducimus iusto assumenda unde delectus ad placeat quam ea quos ipsam rerum voluptatem, iste, rem dicta, dolore in perferendis dolorem excepturi minus magnam magni. Totam sed nisi quia veniam odit voluptates nihil alias temporibus recusandae, nam facere illum optio incidunt iure esse quasi. Sequi reprehenderit deserunt similique at quo excepturi necessitatibus ducimus atque nulla.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga libero eius laudantium sapiente quibusdam incidunt facilis minima, vero id distinctio autem! Aliquid sunt veritatis delectus? Dicta in qui tempora minima earum culpa obcaecati quia, praesentium et, alias possimus! Sint nulla culpa tenetur rem, itaque deserunt et? Ducimus iusto assumenda unde delectus ad placeat quam ea quos ipsam rerum voluptatem, iste, rem dicta, dolore in perferendis dolorem excepturi minus magnam magni. Totam sed nisi quia veniam odit voluptates nihil alias temporibus recusandae, nam facere illum optio incidunt iure esse quasi. Sequi reprehenderit deserunt similique at quo excepturi necessitatibus ducimus atque nulla.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga libero eius laudantium sapiente quibusdam incidunt facilis minima, vero id distinctio autem! Aliquid sunt veritatis delectus? Dicta in qui tempora minima earum culpa obcaecati quia, praesentium et, alias possimus! Sint nulla culpa tenetur rem, itaque deserunt et? Ducimus iusto assumenda unde delectus ad placeat quam ea quos ipsam rerum voluptatem, iste, rem dicta, dolore in perferendis dolorem excepturi minus magnam magni. Totam sed nisi quia veniam odit voluptates nihil alias temporibus recusandae, nam facere illum optio incidunt iure esse quasi. Sequi reprehenderit deserunt similique at quo excepturi necessitatibus ducimus atque nulla.</p>
                    <ul>
                        <li>Home</li>
                        <li><a href="#">Home</a></li>
                        <li>Home</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga libero eius laudantium sapiente quibusdam incidunt facilis minima, vero id distinctio autem! Aliquid sunt veritatis delectus? Dicta in qui tempora minima earum culpa obcaecati quia, praesentium et, alias possimus! Sint nulla culpa tenetur rem, itaque deserunt et? Ducimus iusto assumenda unde delectus ad placeat quam ea quos ipsam rerum voluptatem, iste, rem dicta, dolore in perferendis dolorem excepturi minus magnam magni. Totam sed nisi quia veniam odit voluptates nihil alias temporibus recusandae, nam facere illum optio incidunt iure esse quasi. Sequi reprehenderit deserunt similique at quo excepturi necessitatibus ducimus atque nulla.</p>
                </div>
            </div>
        )
    }

    return (
        <>

            <section className='aboutBanner'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <Banner bannerHeading="Return Policy" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <ReturnPolicySecStyled>
                <Container>
                    <Row>
                        <Col md={12}>
                            <SectionHandle SectionHandlerHeading={ReturnPolicySecContent()} />
                        </Col>
                    </Row>
                </Container>
            </ReturnPolicySecStyled>
        </>
    )
}

const ReturnPolicySecStyled = styled.section`
    padding: 60px 0px;
`

export default ReturnPolicySec