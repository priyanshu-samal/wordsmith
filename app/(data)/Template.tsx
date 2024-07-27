const tools = [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates titles depending on your blog information.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4693/4693065.png',
        aiPromt: 'Generate 5 blog title ideas in bullet points based on your given niche and outline topic, and give me the result in Rich text editor format.',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that generates content based on your blog title.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2593/2593510.png',
        aiPromt: 'Generate blog content based on the topic and outline and give me the result in Rich text editor format.',
        slug: 'generate-blog-content',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title creator.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/841/841743.png',
        aiPromt: 'Generate 5 blog topic ideas in bullet points based on the given information.',
        slug: 'generate-blog-topic-ideas',
        form: [
            {
                label: 'Enter your niche',
                field: 'input',
                name: 'niche',
                required: true
            }
        ]
    },
    {
        name: 'YouTube SEO Title',
        desc: 'An AI tool that helps create SEO-friendly titles for your YouTube videos.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384028.png',
        aiPromt: 'Generate 5 SEO-friendly YouTube titles based on the provided keywords and video description.',
        slug: 'generate-youtube-seo-title',
        form: [
            {
                label: 'Enter your video keywords',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter video description',
                field: 'textarea',
                name: 'description'
            }
        ]
    },
    {
        name: 'YouTube Description',
        desc: 'An AI tool that generates engaging descriptions for your YouTube videos.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/10209/10209854.png',
        aiPromt: 'Generate a YouTube video description based on the provided title and keywords.',
        slug: 'generate-youtube-description',
        form: [
            {
                label: 'Enter your video title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter video keywords',
                field: 'input',
                name: 'keywords'
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that helps create engaging Instagram posts.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/1400/1400829.png',
        aiPromt: 'Generate an engaging Instagram post caption based on the provided theme and keywords.',
        slug: 'generate-instagram-post',
        form: [
            {
                label: 'Enter post theme',
                field: 'input',
                name: 'theme',
                required: true
            },
            {
                label: 'Enter keywords',
                field: 'input',
                name: 'keywords'
            }
        ]
    },
    {
        name: 'LinkedIn Post Generator',
        desc: 'An AI tool that helps create professional LinkedIn posts.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/61/61109.png',
        aiPromt: 'Generate a LinkedIn post based on the provided topic and keywords.',
        slug: 'generate-linkedin-post',
        form: [
            {
                label: 'Enter post topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter keywords',
                field: 'input',
                name: 'keywords'
            }
        ]
    },
    {
        name: 'Twitter Thread Generator',
        desc: 'An AI tool that helps create engaging Twitter threads.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968830.png',
        aiPromt: 'Generate a Twitter thread based on the provided topic and main points.',
        slug: 'generate-twitter-thread',
        form: [
            {
                label: 'Enter thread topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter main points',
                field: 'textarea',
                name: 'mainPoints'
            }
        ]
    },
    {
        name: 'Resume Builder',
        desc: 'An AI tool that helps create professional resumes.',
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135686.png',
        aiPromt: 'Generate a professional resume based on the provided information and job description.',
        slug: 'generate-resume',
        form: [
            {
                label: 'Enter your name',
                field: 'input',
                name: 'name',
                required: true
            },
            {
                label: 'Enter your job title',
                field: 'input',
                name: 'jobTitle',
                required: true
            },
            {
                label: 'Enter your skills',
                field: 'textarea',
                name: 'skills',
                required: true
            },
            {
                label: 'Enter your job description',
                field: 'textarea',
                name: 'jobDescription',
                required: true
            }
        ]
    },
    {
        name: 'Cover Letter Generator',
        desc: 'An AI tool that helps create personalized cover letters.',
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/10488/10488917.png',
        aiPromt: 'Generate a personalized cover letter based on the provided job description and personal information.',
        slug: 'generate-cover-letter',
        form: [
            {
                label: 'Enter your name',
                field: 'input',
                name: 'name',
                required: true
            },
            {
                label: 'Enter the job title you are applying for',
                field: 'input',
                name: 'jobTitle',
                required: true
            },
            {
                label: 'Enter the company name',
                field: 'input',
                name: 'companyName',
                required: true
            },
            {
                label: 'Enter the job description',
                field: 'textarea',
                name: 'jobDescription',
                required: true
            }
        ]
    },
    {
        name: 'Product Description Generator',
        desc: 'An AI tool that generates product descriptions for e-commerce.',
        category: 'E-commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/11168/11168347.png',
        aiPromt: 'Generate a product description based on the provided product name and features.',
        slug: 'generate-product-description',
        form: [
            {
                label: 'Enter product name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Enter product features',
                field: 'textarea',
                name: 'productFeatures',
                required: true
            }
        ]
    },
    {
        name: 'Email Response Generator',
        desc: 'An AI tool that helps generate professional email responses.',
        category: 'Productivity',
        icon: 'https://cdn-icons-png.flaticon.com/128/17399/17399024.png',
        aiPromt: 'Generate a professional email response based on the provided email context and required response.',
        slug: 'generate-email-response',
        form: [
            {
                label: 'Enter email context',
                field: 'textarea',
                name: 'emailContext',
                required: true
            },
            {
                label: 'Enter required response',
                field: 'textarea',
                name: 'requiredResponse',
                required: true
            }
        ]
    },
    {
        name: 'Meeting Summary Generator',
        desc: 'An AI tool that generates meeting summaries from notes.',
        category: 'Productivity',
        icon: 'https://cdn-icons-png.flaticon.com/128/2329/2329087.png',
        aiPromt: 'Generate a meeting summary based on the provided meeting notes.',
        slug: 'generate-meeting-summary',
        form: [
            {
                label: 'Enter meeting notes',
                field: 'textarea',
                name: 'meetingNotes',
                required: true
            }
        ]
    }
];

export default tools;
