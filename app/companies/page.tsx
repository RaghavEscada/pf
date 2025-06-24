'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter } from 'lucide-react';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { navItems } from '@/data';

const acquisitions = [
    {
        name: "Sourcely",
        logoImage: "/sourcely.webp",
        description: "AI-powered academic search assistant with access to over 200 million papers and advanced search filters",
        url: "sourcely.net",
        price: 4000,
        type: "SaaS",
        status: "Acquired",
        technology: "AI Research"
    },
    {
        name: "The Empire Exchange",
        logoImage: "/jeditimes.webp",
        description: "Your bi-weekly dose of all the best loot from a galaxy far, far away sent straight to your inbox",
        url: "jeditimes.com",
        price: 3000,
        type: "Newsletter",
        subscribers: "6,000+",
        status: "Scaling"
    },
    {
        name: "UCAS Statement Generator",
        logoImage: "/slash.webp",
        description: "SaaS tool for generating UCAS statements for university applications",
        url: "ucasstatementgenerator.com",
        price: 3500,
        type: "SaaS",
        status: "Acquired",
        technology: "EdTech"
    },
    {
        name: "Ana - AI Language Tutor",
        logoImage: "/ana.webp",
        description: "Your personalized AI tutor to practice languages conversationally and improve speaking fluency",
        url: "anatutor.com",
        price: 5000,
        type: "WhatsApp Bot",
        status: "Acquired",
        technology: "AI Tutor"
    },
    {
        name: "Daily Wisdom",
        logoImage: "/dailywisdom.webp",
        description: "Spiritual newsletter delivering daily wisdom and inspiration to subscribers",
        url: "dailywisdom.so",
        price: 2000,
        type: "Newsletter",
        status: "Acquired"
    },
    {
        name: "Jobless",
        logoImage: "/slash.webp",
        description: "Your go-to source for tech jobs, tips, and real stories from builders, hackers, and doers",
        url: "joblessnews.beehiiv.com",
        price: 12500,
        type: "Newsletter",
        status: "Acquired"
    }
];

interface Company {
    name: string;
    logoImage: string;
    description: string;
    url: string;
    price: number;
    type: string;
    status: string;
    technology?: string;
    subscribers?: string;
}

const CompanyCard = ({ company }: { company: Company }) => {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 group hover:scale-102">
            <div className="relative w-full h-32 mb-4">
                <Image
                    src={company.logoImage}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain rounded-lg"
                />
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-white">{company.name}</h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${company.status === 'Acquired'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-blue-500/20 text-blue-400'
                        }`}>
                        {company.status}
                    </div>
                </div>

                <p className="text-gray-400 text-sm">{company.description}</p>

                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300">
                        {company.type}
                    </span>
                    {company.technology && (
                        <span className="px-2 py-1 bg-purple-900/30 text-purple-400 rounded-md text-xs">
                            {company.technology}
                        </span>
                    )}
                    {company.subscribers && (
                        <span className="px-2 py-1 bg-blue-900/30 text-blue-400 rounded-md text-xs">
                            {company.subscribers} Subscribers
                        </span>
                    )}
                </div>

                <div className="flex justify-between items-center pt-2">
                    <span className="text-green-400 font-semibold">
                        {formatPrice(company.price)}
                    </span>
                    <a
                        href={`https://${company.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
                    >
                        {company.url} ↗
                    </a>
                </div>
            </div>
        </div>
    );
};

const CompaniesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');

    const types = ['All', ...Array.from(new Set(acquisitions.map(company => company.type)))];
    const statuses = ['All', ...Array.from(new Set(acquisitions.map(company => company.status)))];

    const filteredCompanies = useMemo(() => {
        return acquisitions.filter(company => {
            const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                company.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesType = selectedType === 'All' || company.type === selectedType;
            const matchesStatus = selectedStatus === 'All' || company.status === selectedStatus;

            return matchesSearch && matchesType && matchesStatus;
        });
    }, [searchQuery, selectedType, selectedStatus]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
            <FloatingNav
                navItems={navItems}
                logo={{
                    src: "/pflogod.webp",
                    text: "Pocket Fund",
                    link: "/"
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl pt-10 md:text-5xl font-bold text-white mb-6">
                        Our Portfolio Companies
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Discover our collection of successful acquisitions and growing companies,
                        showcasing the diverse range of businesses we&#39;ve helped build and scale.
                    </p>
                </div>

                {/* Filters Section */}
                <div className="mb-12 space-y-4">
                    <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
                        {/* Search Bar */}
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search companies..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50"
                            />
                        </div>

                        {/* Filter Dropdowns */}
                        <div className="flex gap-4">
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500/50"
                            >
                                {types.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>

                            <select
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500/50"
                            >
                                {statuses.map(status => (
                                    <option key={status} value={status}>{status}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Companies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCompanies.map((company, index) => (
                        <CompanyCard key={index} company={company} />
                    ))}
                </div>

                {/* No Results Message */}
                {filteredCompanies.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">
                            No companies found matching your criteria.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CompaniesPage; 