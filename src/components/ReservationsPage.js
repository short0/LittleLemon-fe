import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ReservationPage = () => {
    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        initialValues: {
            date: new Date(),
            time: "17:00",
            numGuests: 1,
            occasion: "",
        },
        onSubmit: (values) => {
            submit('', values);
        },
        validationSchema: Yup.object({
            date: Yup.date().min(new Date(), "Date should be in the future").required("Required"),
            numGuests: Yup.number()
                .min(1, "Must be bigger than 1")
                .max(10, "Must be smaller than 10")
                .required("Required"),
        }),
    });

    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message);
            if (response.type === 'success') {
                formik.resetForm();
            }
        }
    }, [response]);

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#495E57"
            py={16}
            spacing={8}
        >
            <VStack w="1024px" p={32} alignItems="flex-start">
                <Heading as="h1">
                    Booking Form
                </Heading>
                <Box p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={formik.errors.date && formik.touched.date}>
                                <FormLabel htmlFor="date">Choose date</FormLabel>
                                <Input
                                    id="date"
                                    name="date"
                                    type="date"
                                    {...formik.getFieldProps("date")}
                                />
                                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="time">Choose time</FormLabel>
                                <Select id="time" name="time" {...formik.getFieldProps("time")}>
                                    <option value="17:00">17:00</option>
                                    <option value="18:00">18:00</option>
                                    <option value="18:00">19:00</option>
                                    <option value="20:00">20:00</option>
                                    <option value="21:00">21:00</option>
                                    <option value="22:00">22:00</option>
                                </Select>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.numGuests && formik.touched.numGuests}>
                                <FormLabel htmlFor="numGuests">Number of guests</FormLabel>
                                <Input
                                    id="numGuests"
                                    name="numGuests"
                                    type="number"
                                    {...formik.getFieldProps("numGuests")}
                                />
                                <FormErrorMessage>{formik.errors.numGuests}</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                                <Select id="occasion" name="occasion" {...formik.getFieldProps("occasion")}>
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="other">Other</option>
                                </Select>
                            </FormControl>

                            <Button type="submit" backgroundColor="#F4CE14" color="#333333" width="full" isLoading={isLoading}>
                                Submit
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    );
};

export default ReservationPage;