import img1 from '/public/mock/images/headphones1.jpg'
import img2 from '/public/mock/images/headphones2.jpg'
import img3 from '/public/mock/images/soundlink1.jpg'
import img4 from '/public/mock/images/soundlink2.jpg'
import img5 from '/public/mock/images/watch1.jpg'
import img6 from '/public/mock/images/watch2.jpg'
import img7 from '/public/mock/images/headphones4.jpg'
import img8 from '/public/mock/images/headphones3.jpg'
import img9 from '/public/mock/images/soundbar1.jpg'
import img10 from '/public/mock/images/soundbar2.jpg'
import img11 from '/public/mock/images/tablet1.jpg'
import img12 from '/public/mock/images/tablet2.jpg'
import img13 from '/public/mock/images/headphones5.jpg'
import img14 from '/public/mock/images/headphones6.jpg'
import img15 from '/public/mock/images/phone1.jpg'
import img16 from '/public/mock/images/phone2.jpg'
import img17 from '/public/mock/images/controller1.jpg'
import img18 from '/public/mock/images/controller2.jpg'
import img19 from '/public/mock/images/camera1.jpg'
import img20 from '/public/mock/images/camera2.jpg'
import img21 from '/public/mock/images/powerbank1.jpg'
import img22 from '/public/mock/images/powerbank2.jpg'
import img23 from '/public/mock/images/camera3.jpg'
import img24 from '/public/mock/images/camera4.jpg'
import img25 from '/public/mock/images/smartspeaker1.jpg'
import img26 from '/public/mock/images/smartspeaker2.jpg'
import img27 from '/public/mock/images/base1.jpg'
import img28 from '/public/mock/images/base2.jpg'
import img29 from '/public/mock/images/mouse1.jpg'
import img30 from '/public/mock/images/mouse2.jpg'

import usr1 from '/public/mock/images/user1.jpg'
import usr2 from '/public/mock/images/user2.jpg'
import usr3 from '/public/mock/images/user3.jpg'
import usr4 from '/public/mock/images/user4.jpg'

import gamestick from '/public/mock/images/gamestick.jpg'
import headphones from '/public/mock/images/headphone.jpg'
import photocamera from '/public/mock/images/photocamera.jpg'
import laptop from '/public/mock/images/laptop.jpg'
import iphone from '/public/mock/images/iphone.jpg'
import monitors from '/public/mock/images/telivision.jpg'
import printers from '/public/mock/images/printers.jpg'
import refregirators from '/public/mock/images/refrigerators.jpg'
import smartWatch from '/public/mock/images/smart-watch.jpg'
import soundbars from '/public/mock/images/soundbars.jpg'

import product1 from '/public/mock/images/product1.jpg'
import product2 from '/public/mock/images/product2.jpg'
import product3 from '/public/mock/images/product3.jpg'
import product4 from '/public/mock/images/product4.jpg'
import product5 from '/public/mock/images/product5.jpg'
import product6 from '/public/mock/images/product6.jpg'
import product7 from '/public/mock/images/product7.jpg'
import product8 from '/public/mock/images/product8.jpg'
import product9 from '/public/mock/images/product9.jpg'

import { ICategory, IImage } from '@/app/types/Product'

export const data = {
    sideBarMenu: [
        'Headphone',
        'Home Appliances',
        'Laptop',
        'Mobiles',
        'Monitors',
        'Printers',
        'Refrigerators',
        'Smart Waths',
        'Game Stick',
        'Soundbars',
        'Show more',
    ],

    productById: {
        id: 123,
        createdAt: '123',
        updatedAt: '123',
        name: 'Galaxy wath 4',
        slug: 'galaxy wath 4',
        description: 'Описание',
        price: 340,
        quantity: 123,
        available: false,
        isPublished: true,
        category: {
            name: 'Часы',
            id: 123,
            slug: 'asd',
            image: '',
        } as ICategory,
        images: [
            { image: product1 },
            { image: product2 },
            { image: product3 },
            { image: product4 },
            { image: product5 },
            { image: product6 },
        ] as unknown as IImage[],
    },

    feature_product: [
        {
            name: 'Samsung Buds 2.0 Pro Galaxy MM-r4 NZAWXAR',
            img: [img1, img2],
            price: '$129.00',
            rating: 5,
        },
        {
            name: 'Bose Sound Link Micro Wireless Bluetooth Speaker',
            img: [img3, img4],
            price: '$229.00',
            rating: 5,
        },
        {
            name: 'Galaxy Watch5 44mm Bluetooth Smart Watch',
            img: [img5, img6],
            price: '$155.00',
            rating: 5,
        },
        {
            name: 'Beats Ear Headphones Studio Buds Wireless',
            img: [img7, img8],
            price: '$210.00',
            rating: 5,
        },
        {
            name: 'Echo Dot 4th Gen Smart speaker with Alexa',
            img: [img9, img10],
            price: '$149.00',
            rating: 5,
        },
        {
            name: 'Apple iPad Air 5th Generator Wi-Fi Cellular',
            img: [img11, img12],
            price: '$149.00',
            rating: 5,
        },
        {
            name: 'Air Buds Bluetooth, True Wireless with Charging',
            img: [img13, img14],
            price: '$109.00',
            rating: 4,
        },
        {
            name: 'Apple Iphone 14 Pro Max, 64GB, White Unlocked',
            img: [img15, img16],
            price: '$109.00',
            rating: 4,
        },
    ],

    newProduct: [
        {
            // name: 'Samsung Buds 2.0 Pro Galaxy MM-r4 NZAWXAR',
            name: 'Samsung',
            img: [img1, img2],
            price: '$129.00',
            rating: 5,
        },
        {
            name: 'Newest PlayStation PS5 Gaming Console Bundle',
            img: [img17, img18],
            price: '$39.00',
            rating: 5,
        },
        {
            name: 'Laview home security camera HD 1080p',
            img: [img19, img20],
            price: '$79.00',
            rating: 5,
        },
        {
            name: 'Power Bank',
            img: [img21, img22],
            price: '$15.00',
            rating: 5,
        },
        {
            name: 'Bose Sound Link Micro Wireless Bluetooth Speaker',
            img: [img3, img4],
            price: '$229.00',
            rating: 5,
        },
        {
            name: 'Wifi Camera Memory Card 1080p Camera CCTV',
            img: [img23, img24],
            price: '$149.00',
            rating: 5,
        },
        {
            name: 'Woo Amazon echo plus 3rd generation smart speaker',
            img: [img25, img26],
            price: '$149.00',
            rating: 5,
        },
        {
            name: 'Basics USB Plug-n-Play Computer Speakers for PC',
            img: [img27, img28],
            price: '$149.00',
            rating: 5,
        },
        {
            name: 'Logitech Wireless Mouse with 2.4 GHz Wireless',
            img: [img29, img30],
            price: '$49.00',
            rating: 5,
        },
    ],

    bestsellerProduct: [
        {
            name: 'Woo Amazon echo plus 3rd generation smart speaker',
            img: [img25, img26],
            price: '$149.00',
            rating: 5,
        },
        {
            name: 'Basics USB Plug-n-Play Computer Speakers for PC',
            img: [img27, img28],
            price: '$149.00',
            rating: 5,
        },
        {
            name: 'Logitech Wireless Mouse with 2.4 GHz Wireless',
            img: [img29, img30],
            price: '$49.00',
            rating: 5,
        },
    ],

    footerMenu: {
        leftCol: [
            'Help Center',
            'Redeem Voucher',
            'Order History',
            'Shopping Cart',
            'Affiliate',
            'Account',
            'Gift Card',
            'Service Center',
        ],
        centerCol: [
            'Product Support',
            'Checkout',
            'License Policy',
            'Submit a Dispute',
            'Locality',
            'About us',
            'Polices & Rules',
            'Terms & Conditions',
        ],
        rightCol: [
            'About us',
            'Careers',
            'Blog',
            'Submit a Dispute',
            'Affiliate',
            'Contact Us',
            'Support',
        ],
    },

    fakeCustomers: [
        {
            src: usr1,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
            name: 'Allie Grater',
            specials: 'Designer',
        },
        {
            src: usr2,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
            name: 'Josh Doe',
            specials: 'Engineer',
        },
        {
            src: usr3,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
            name: 'Rose Bruh',
            specials: 'IT expert',
        },
        {
            src: usr4,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
            name: 'Percy Kewshun',
            specials: 'Architech',
        },
        {
            src: usr1,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
            name: 'Allie Grater',
            specials: 'Designer',
        },
        {
            src: usr2,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
            name: 'Josh Doe',
            specials: 'Engineer',
        },
    ],

    shopByFeaturedCategories: [
        {
            img: gamestick,
            title: 'Game stick',
            amount: 1,
        },
        {
            img: headphones,
            title: 'Headphone',
            amount: 13,
        },
        {
            img: photocamera,
            title: 'Home Appliance',
            amount: 5,
        },
        {
            img: laptop,
            title: 'Laptop',
            amount: 11,
        },
        {
            img: iphone,
            title: 'Mobiles',
            amount: 22,
        },
        {
            img: monitors,
            title: 'Monitors',
            amount: 9,
        },
        {
            img: printers,
            title: 'Printers',
            amount: 20,
        },
        {
            img: refregirators,
            title: 'Refrigerators',
            amount: 19,
        },
        {
            img: smartWatch,
            title: 'Smart Watch',
            amount: 5,
        },
        {
            img: soundbars,
            title: 'Sound bars',
            amount: 14,
        },
    ],

    sliderData: [
        'slide1',
        'slide2',
        'slide3',
        'slide4',
        'slide5',
        'slide6',
        'slide7',
        'slide8',
    ],

    categoryFilter: [
        { name: 'Headphones' },
        { name: 'Home Appliance' },
        { name: 'Laptop' },
        { name: 'Mobiles' },
        { name: 'Monitors' },
        { name: 'Printers' },
        { name: 'Refrigerators' },
        { name: 'Smart Waths' },
        { name: 'Game Stick' },
        { name: 'Soundbars' },
        { name: 'Sports & Action' },
        { name: 'Tablets' },
        { name: 'Television' },
        { name: 'VR Game' },
    ],

    colorFilter: [
        { color: 'black' },
        { color: 'blue' },
        { color: 'orange' },
        { color: 'pink' },
        { color: 'red' },
        { color: 'silver' },
        { color: 'white' },
        { color: 'yellow' },
    ],

    sizeFilter: [{ name: 'Large' }, { name: 'Medium' }, { name: 'Small' }],

    sliderImg: [
        product1,
        product2,
        product3,
        product4,
        product5,
        product6,
        product7,
        product8,
        product9,
    ],
}

export const getData = async (ms: number = 2000): Promise<typeof data> => {
    return await new Promise((resolve) => {
        setTimeout(resolve, ms, data)
    })
}

export default data
