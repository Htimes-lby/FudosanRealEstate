import React from 'react';
import { useState } from 'react';
import AccordionItem from '../components/AccordionItem';

const faqs = [
    {
        id: 1,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 2,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト `
    },
    {
        id: 3,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
        テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 4,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 5,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 6,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 7,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 8,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 9,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 10,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 11,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 12,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 13,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 14,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 15,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 16,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 17,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 18,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 19,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 20,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    },
    {
        id: 21,
        header: "テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト?",
        text: `テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト
テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキストテキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト`
    }
    

]

const FAQPage = () => {
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }

    return (
        <div className='flex justify-center items-center w-full'>
        <div className='flex flex-col w-[60%]'>
            {faqs.map((faq, index) => {
                return (
                        <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                        )
                })
            }
        </div>
            {/* <div className="container-fluid mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-2">
                        <div className="card">
                            <div className="card-body w-[70%]">
                              <h4 className="form-heading mb-4 text-primary text-center mt-3">React Accordion</h4>
                                {faqs.map((faq, index) => {
                                     return (
                                            <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default FAQPage;