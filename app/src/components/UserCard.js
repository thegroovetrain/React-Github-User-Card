import React from 'react';
import styled from 'styled-components';

export default function UserCard (props) {

    return (
        <Container>
            <Header>{props.data.name}</Header>
            <Avatar src={props.data.avatar_url} />
            <Content>
                <dt>Login</dt>
                <dd>{props.data.login}</dd>
                <dt>Location</dt>
                <dd>{props.data.location}</dd>
                <dt>Url</dt>
                <dd><a href={props.data.html_url}>{props.data.html_url}</a></dd>
                <dt>Followers: {props.data.followers}</dt>
                <dd>
                    {
                        props.followers.map(a => {
                            return (
                                <Follower src={a.avatar_url} />
                            )
                        })
                    }
                </dd>
            </Content>
        </Container>
    )

}

const Container = styled.div`
    background-color: seagreen;
    width: 40rem;
    margin: 1rem auto;
    padding: 0.5rem;

    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 42rem) {
        width: 90%;
    }
`;

const Header = styled.h1`
    color: white;
    font-size: 3rem;
    width: 100%;
    margin: 0;
    padding: 0.5rem;
    text-align: center;
`;

const Avatar = styled.img`
    width: 50%;
`;

const Content = styled.dl`
    width: calc(50% - 1rem);
    margin: 0 0 0 1rem;
    color: white;
`;

const Follower = styled.img`
    height: 3rem;
    margin: 0.5rem;
`;