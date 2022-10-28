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
                                
                                position={'relative'}
                                fontSize={{ base: '3.5em', sm: '4.5em', md: '6em', lg: '7em' }}>
                                    <Wave text={title}/>
                            </Heading>
                    </Flex>
    )
}


export default Title