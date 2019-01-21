import React from 'react'
import Layout from '../../components/layout'
import Greeting from '../../components/greeting'

const AboutPage = () => (
    <Layout>
        <h1>About Page</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam voluptate dolor deleniti quaerat nostrum blanditiis nemo itaque earum totam fuga sint rerum, vitae quae reiciendis optio asperiores ipsum quasi consequatur tempora odit voluptatibus aspernatur? Rem unde dolorem tenetur distinctio error sint, ipsam accusamus magni. Tempora pariatur aut possimus facilis harum!</p>
        <Greeting greeting='eat' name='crap'/>
    </Layout>
)

export default AboutPage