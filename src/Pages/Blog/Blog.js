import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
useTitle("Blog");

    return (
        <div>
            <b>1.What are the different ways to manage a state in a React application?</b>
            <p>As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.</p>
            <b>2. How does prototypical inheritance work?</b>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
            <b>3. What is a unit test? Why should we write unit tests?</b>
            <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            <b>4. React vs. Angular vs. Vue?</b>
            <p>Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as: “The modern web developer’s platform” It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.
                React is considered a UI library. They define themselves as: “A JavaScript library for building user interfaces” Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React. Last but not least, Vue.js is, according to its site: “A progressive JavaScript framework”
                Vue.js is developed and led by Evan You, but also it counts on a huge open-source community. These three frameworks have several things in common, such as each follows a component-based architecture and allows creating UI features quickly. React and Vue.js are mainly declarative, and while Angular could also be declarative, it’s really more imperative. Nevertheless, they present some more differences according to their structure, architecture and way of working, so let’s dive into all these characteristics.</p>
        </div>
    );
};

export default Blog;