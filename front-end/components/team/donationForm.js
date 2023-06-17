import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";

const AddDonationRequestForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        donationType: "",
        amount: "",
        media: null,
        currency: "",
    });

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);


    const country_list = {
        "AED": "AE",
        "AFN": "AF",
        "XCD": "AG",
        "ALL": "AL",
        "AMD": "AM",
        "ANG": "AN",
        "AOA": "AO",
        "AQD": "AQ",
        "ARS": "AR",
        "AUD": "AU",
        "AZN": "AZ",
        "BAM": "BA",
        "BBD": "BB",
        "BDT": "BD",
        "XOF": "BE",
        "BGN": "BG",
        "BHD": "BH",
        "BIF": "BI",
        "BMD": "BM",
        "BND": "BN",
        "BOB": "BO",
        "BRL": "BR",
        "BSD": "BS",
        "NOK": "BV",
        "BWP": "BW",
        "BYR": "BY",
        "BZD": "BZ",
        "CAD": "CA",
        "CDF": "CD",
        "XAF": "CF",
        "CHF": "CH",
        "CLP": "CL",
        "CNY": "CN",
        "COP": "CO",
        "CRC": "CR",
        "CUP": "CU",
        "CVE": "CV",
        "CYP": "CY",
        "CZK": "CZ",
        "DJF": "DJ",
        "DKK": "DK",
        "DOP": "DO",
        "DZD": "DZ",
        "ECS": "EC",
        "EEK": "EE",
        "EGP": "EG",
        "ETB": "ET",
        "EUR": "FR",
        "FJD": "FJ",
        "FKP": "FK",
        "GBP": "GB",
        "GEL": "GE",
        "GGP": "GG",
        "GHS": "GH",
        "GIP": "GI",
        "GMD": "GM",
        "GNF": "GN",
        "GTQ": "GT",
        "GYD": "GY",
        "HKD": "HK",
        "HNL": "HN",
        "HRK": "HR",
        "HTG": "HT",
        "HUF": "HU",
        "IDR": "ID",
        "ILS": "IL",
        "INR": "IN",
        "IQD": "IQ",
        "IRR": "IR",
        "ISK": "IS",
        "JMD": "JM",
        "JOD": "JO",
        "JPY": "JP",
        "KES": "KE",
        "KGS": "KG",
        "KHR": "KH",
        "KMF": "KM",
        "KPW": "KP",
        "KRW": "KR",
        "KWD": "KW",
        "KYD": "KY",
        "KZT": "KZ",
        "LAK": "LA",
        "LBP": "LB",
        "LKR": "LK",
        "LRD": "LR",
        "LSL": "LS",
        "LTL": "LT",
        "LVL": "LV",
        "LYD": "LY",
        "MAD": "MA",
        "MDL": "MD",
        "MGA": "MG",
        "MKD": "MK",
        "MMK": "MM",
        "MNT": "MN",
        "MOP": "MO",
        "MRO": "MR",
        "MTL": "MT",
        "MUR": "MU",
        "MVR": "MV",
        "MWK": "MW",
        "MXN": "MX",
        "MYR": "MY",
        "MZN": "MZ",
        "NAD": "NA",
        "XPF": "NC",
        "NGN": "NG",
        "NIO": "NI",
        "NPR": "NP",
        "NZD": "NZ",
        "OMR": "OM",
        "PAB": "PA",
        "PEN": "PE",
        "PGK": "PG",
        "PHP": "PH",
        "PKR": "PK",
        "PLN": "PL",
        "PYG": "PY",
        "QAR": "QA",
        "RON": "RO",
        "RSD": "RS",
        "RUB": "RU",
        "RWF": "RW",
        "SAR": "SA",
        "SBD": "SB",
        "SCR": "SC",
        "SDG": "SD",
        "SEK": "SE",
        "SGD": "SG",
        "SKK": "SK",
        "SLL": "SL",
        "SOS": "SO",
        "SRD": "SR",
        "STD": "ST",
        "SVC": "SV",
        "SYP": "SY",
        "SZL": "SZ",
        "THB": "TH",
        "TJS": "TJ",
        "TMT": "TM",
        "TND": "TN",
        "TOP": "TO",
        "TRY": "TR",
        "TTD": "TT",
        "TWD": "TW",
        "TZS": "TZ",
        "UAH": "UA",
        "UGX": "UG",
        "USD": "US",
        "UYU": "UY",
        "UZS": "UZ",
        "VEF": "VE",
        "VND": "VN",
        "VUV": "VU",
        "YER": "YE",
        "ZAR": "ZA",
        "ZMK": "ZM",
        "ZWD": "ZW"
    }
    const countryArray = Object.entries(country_list);

    const [jsonResponse, setJsonResponse] = useState(null);
    const router = useRouter();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData.currency)
    };

    const handleFileInputChange = (event) => {
        const { name, files } = event.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if required fields are filled
        if (!formData.title || !formData.description || !formData.donationType) {
            alert("Please fill in all required fields");
            return;
        }

        // Check if donation type is money and amount is filled
        if (formData.donationType === "money" && !formData.amount) {
            alert("Please enter an amount for money donations");
            return;
        }

        const user = JSON.parse(sessionStorage.getItem("user"));
        const form = new FormData();
        form.append("user", user._id);
        form.append("title", formData.title);
        form.append("description", formData.description);
        form.append("type", formData.donationType);
        form.append("amount", formData.amount);
        form.append("media", formData.media);
        form.append("currency", formData.currency);

        try {
            // Make the API request
            const response = await axios.post(
                "http://localhost:8000/donation/donations",
                form,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            // Extract the relevant data from the response
            const { message, data, analysis } = response.data;
            console.log(response.data);
            if (response.data.message != undefined) {
                alert(response.data.message);

            } else {
                alert(response.data);

            }

            // Display the saved object and analysis data
            console.log(data);
            console.log(analysis);

            setJsonResponse(JSON.stringify(response.data, null, 2));
            console.log(JSON.stringify(data, null, 2));
        } catch (error) {
            if (error.response && error.response.data) {
                console.log(error.response.data);
                alert("Error adding donation request. Please try again later.");
            } else {
                console.log(error);
                alert("Network error. Please check your connection and try again.");
            }
        }

        setShowSuccessMessage(true);
        // Redirect the user to the causes page
        router.push("/causes");

    };
    return (
        <section className="become-volunteer pt-120 pb-80">
            <div className="">
                <Container>
                    {showSuccessMessage && (
                        <Row>
                            <Col>
                                <div className="alert alert-success" role="alert">
                                    Donation added successfully!
                                </div>
                            </Col>
                        </Row>
                    )}


                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Form
                                className="contact-form-validated contact-page__form form-one mb-40"
                                onSubmit={handleSubmit}
                                encType="multipart/form-data"
                            >
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Donation Type</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="donationType"
                                        value={formData.donationType}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select a type</option>
                                        <option value="money">Money</option>
                                        <option value="goods">Goods</option>
                                        <option value="services">Services</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Amount </Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleInputChange}
                                        min={0}
                                        required={formData.donationType === "money"}
                                        disabled={formData.donationType !== "money"}
                                    />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Currency</Form.Label>
                                    <Form.Control as="select" name="currency" onChange={handleInputChange}>
                                        <option value="">Select a currency</option>
                                        {Object.keys(country_list).map((currency, index) => (
                                            <option key={index} value={currency}>
                                                {currency}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Picture </Form.Label>
                                    <Form.Control
                                        type="file"
                                        name="media"
                                        accept="image/*"
                                        onChange={handleFileInputChange}
                                    />
                                </Form.Group>

                                <Button type="submit">Add Donation Request</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default AddDonationRequestForm;
