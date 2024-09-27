
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
} from "@chakra-ui/react";
import { FaFileUpload } from "react-icons/fa";
 
const PublishProduct = () => {
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
                        Add A Product To Store
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
                        <FormLabel >Is this product in stock?</FormLabel>
                      
                      </Flex>
                    </FormControl>
                    <FormControl margin={3}>
                        <FormLabel>Select ratings for this product</FormLabel>
                        <RadioGroup
                            defaultValue={formData.gender}
                            onChange={
                                (value) =>
                                    handleInputChange("gender", value)
                            }>
                            <Stack spacing={5} direction="row">
                                <Radio  value="1">
                                    1
                                </Radio>
                                <Radio colorScheme="green" value="2">
                                    2
                                </Radio>
                                
                                <Radio colorScheme="green" value="3">
                                    3
                                </Radio>

                                                                
                                <Radio colorScheme="green" value="4">
                                    4
                                </Radio>

                                                                
                                <Radio colorScheme="green" value="5">
                                    5
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl margin={3} isRequired>
                        <FormLabel>Choose Platform:</FormLabel>
                        <Stack spacing={3} direction="row">
                            <Checkbox isChecked={true}>UoN Nutrition </Checkbox>
                            <Checkbox>YouTube</Checkbox>
                            <Checkbox>Rumble</Checkbox>
                        </Stack>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Select category</FormLabel>
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
                        <FormLabel>Icon</FormLabel>
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
 
export default PublishProduct;