import {
    Flex,
    Heading
} from '@chakra-ui/react';
import Wave from './Variants/Wave'

const Title = ({title}) => { 
    return ( 
                    <Flex
                        position={'relative'}
                        zIndex={0}>
                            <Heading
                                color={'blackAlpha.800'}
                                position={'relative'}
                                fontSize={{ base: '2.8em', sm: '3.6em', md: '6em', lg: '7em' }}>
                                    <Wave text={title}/>
                            </Heading>
                    </Flex>
    )
}


export default Title