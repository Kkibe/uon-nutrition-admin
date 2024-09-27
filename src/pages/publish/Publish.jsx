
import React, { useState } from "react";
import {
    Button, Flex, Box, Input, Radio,
    RadioGroup, Checkbox, Text, Textarea,
    Select, Tooltip, FormControl, FormLabel,
    Stack,
    Switch,
    Heading,
    ButtonGroup,
    Container,
    TabList,
    Tab,
    TabPanels,
    Tabs,
    TabPanel,
    CircularProgress,
    CircularProgressLabel,
} from "@chakra-ui/react";
import { FaChrome, FaEdge, FaFileUpload, FaFirefox, FaImage } from "react-icons/fa";
import PublishProduct from "./PublishProduct";
import PublishBlog from "./PublishBlog";
 
const Publish = () => {
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
        <Box w="100vw">
            <Flex justifyContent="center">
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList>
                       <Tab>Product</Tab>
                       <Tab>Blog</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                          <PublishProduct />
                        </TabPanel>
                        <TabPanel>
                          <PublishBlog />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </Box>
    );
};
 
export default Publish;