
import React, { useState } from "react";
import {
    Button, Flex, Input, Radio,
    RadioGroup, Checkbox, Text, Textarea,
    Select, FormControl, FormLabel,
    Stack,
    Switch,
    Heading,
    ButtonGroup,
    CircularProgress,
    CircularProgressLabel,
    Tag,
    TagLabel,
    TagCloseButton,
    HStack,
} from "@chakra-ui/react";
import { FaFileUpload } from "react-icons/fa";
 
const PublishBlog = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        emailAddress: "",
        gender: "female",
        languages: [],
        nationality: "",
        address: "",
    });
 
    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };
 
    const handleLanguageCheckboxChange =
        (language) => {
            const languages =
                formData.languages.includes(language)
                    ? formData.languages
                        .filter((lang) => lang !== language)
                    : [...formData.languages, language];
 
            setFormData({
                ...formData,
                languages,
            });
        };
 
    const handleSubmit =
        () => {
            console.log("Form Submitted:", formData);
 
            alert("Form submitted successfully!");
            setFormData({
                firstName: "",
                emailAddress: "",
                gender: "female",
                languages: [],
                nationality: "",
                address: "",
            });
        };
 
    return (
                <Flex
                    direction="column"
                    alignItems="center"
                    w={{ base: "100%", md: "100%", lg: "100%" }}>
                    <Heading as="h2" fontWeight="bold">
                        Add A New Blog Post
                    </Heading>
                    <FormControl isRequired margin={3}>
                        <FormLabel>Short Title (max: 13)</FormLabel>
                        <Input placeholder="Short Title"/>
                    </FormControl>
                    <FormControl isRequired margin={3}>
                        <FormLabel>Description (max: 132)</FormLabel>
                        <Textarea placeholder="Write a descriptive text"/>
                    </FormControl>
                    <FormControl margin={5}>
                      <Flex>
                        <Switch checked={true} colorScheme='green'/>
                        <FormLabel >User can comment?</FormLabel>
                      
                      </Flex>
                    </FormControl>
                    <FormControl margin={3}>
                        <FormLabel>When do you want to go live?</FormLabel>
                        <RadioGroup
                            defaultValue={formData.gender}
                            onChange={
                                (value) =>
                                    handleInputChange("gender", value)
                            }>
                            <Stack spacing={5} direction="row">
                                <Radio  value="now">
                                    now
                                </Radio>
                                <Radio colorScheme="green" value="after 2 hours">
                                    After 2 hours
                                </Radio>
                                
                                <Radio colorScheme="green" value="3">
                                    After 24 hours
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Choose tags</FormLabel>
                        <Select
                            defaultValue={"now"}
                            placeholder="Select option"
                            onChange={
                                (e) =>
                                    handleInputChange("nationality",
                                                      e.target.value)
                            }>
                            <option value="Cereals" >
                              Cereals
                            </option>
                            <option value="Vegetables">
                              Vegetables
                            </option>
                            <option value="Spices">
                              Spices
                            </option>
                            <option value="Processed Food">
                              Processed Food
                            </option>
                            <option value="Low Sugar">
                              Low Sugar
                            </option>
                            <option value="Alcoholic">
                              Alcoholic
                            </option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired margin={3}>
                        <FormLabel>Add At Least 1 tag (max: 5)</FormLabel>
                        <Input placeholder="add tags"/>
                        <HStack spacing={4} isInline mt=".5rem">  
                        {["sm", "md", "lg"].map(size => (
                            <Tag
                              size={size}
                              key={size}
                              rounded="full"
                              variant="subtle"
                              variantColor="cyan"
                            >
                              <TagLabel>Cyan</TagLabel>
                              <TagCloseButton />
                            </Tag>
                        ))}
                        </HStack>
                    </FormControl>
                    <FormControl isRequired margin={3}>
                        <FormLabel>Add Thumbnail</FormLabel>
                        <Flex padding={1} width='260px' height='260px'  border={"1px solid grey"} display='flex' alignItems='center' justifyContent='center' flexDirection='column' position='relative'>
                            <Button><FaFileUpload /></Button>
                            <Text textAlign='center'>Click here or drag & drop to upload.</Text>
                            <Input type='file' width={'100%'} height='100%' position='absolute' zIndex={3} opacity={0} cursor='pointer'/>
                        </Flex>
                    </FormControl>


                    <CircularProgress value={59} size='100px' thickness='4px' isIndeterminate color='green.300'>
                        <CircularProgressLabel>40%</CircularProgressLabel>
                    </CircularProgress>
                    
                    
                    <ButtonGroup spacing={4} margin={5}>
                      <Button
                        type="submit"
                        variant="solid"
                        colorScheme="teal"
                        size="md"
                        onClick={handleSubmit}
                      >
                        Publish
                      </Button>

                      <Button
                        variantColor="teal"
                        variant="outline"
                      >
                        Save draft
                      </Button>
                    </ButtonGroup>
                </Flex>
    );
};
 
export default PublishBlog;