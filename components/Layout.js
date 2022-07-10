import React, { useState, useEffect } from 'react'
import {Button, ChakraProvider, Heading, Input} from '@chakra-ui/react'
import {Box, Container, Flex} from "@chakra-ui/layout";
import Link from "next/link";
import styled, { css } from 'styled-components';
import {Tab, TabList, Tabs} from "@chakra-ui/tabs";
import config from "../config";
import {Img} from "@chakra-ui/image";

const Header = styled.div`
    display: flex;
    margin-top: 25px;
`

const LinkItem = styled.div`
    margin-right: 20px;
    font-size: 14px;
`

const Content = styled.div`
    margin: 25px 0px;
    padding-bottom: 100px;
`

const Layout = ({children}) => {

    return (
        <ChakraProvider>
            <Container maxW="1250px">
                <Flex align="center" mt={10}>
                    <Img src="/img/imx-nocode-minter.png" />
                    <Box ml="4" color="green">{config.appNetwork.charAt(0).toUpperCase() + config.appNetwork.slice(1)}</Box>
                </Flex>
                <Header>
                    <LinkItem>
                        <Link href="/">
                            <Button variant='outline'>General Config</Button>
                        </Link>
                    </LinkItem>
                    {config.generalConfigUpdated &&
                        <>
                            {!config.databaseImported &&
                            <LinkItem>
                                <Link href="/import-db">
                                    <Button variant='outline'>Import Database</Button>
                                </Link>
                            </LinkItem>
                            }
                            <LinkItem>
                                <Link href="/deploy-contract">
                                    <Button variant='outline'>Deploy Contract</Button>
                                </Link>
                            </LinkItem>
                            <LinkItem>
                                <Link href="/collections">
                                    <Button variant='outline'>NFT Collections</Button>
                                </Link>
                            </LinkItem>
                            {/*<LinkItem>*/}
                            {/*    <Link href="/whitelist">*/}
                            {/*        <Button variant='outline'>Import Whitelist</Button>*/}
                            {/*    </Link>*/}
                            {/*</LinkItem>*/}
                            {/*<LinkItem>*/}
                            {/*    <Link href="/mint">*/}
                            {/*        <Button variant='outline'>Mint NFTs</Button>*/}
                            {/*    </Link>*/}
                            {/*</LinkItem>*/}
                        </>
                    }
                </Header>
                <Content>
                    {children}
                </Content>
            </Container>
        </ChakraProvider>
    )
}

export default Layout;
