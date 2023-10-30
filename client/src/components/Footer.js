import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="absolute bottom-0 w-screen text-gray-600 body-font">
                <div class="bg-gray-100">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-gray-500 text-sm text-center sm:text-left">© 2023-24 Automatic Ration Distribution System (ARDS) —
                            <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@heritageit.edu</a>
                        </p>
                        <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
