import { CTAButton } from "ui-components";

function Divider() {
    return (<div className={'bg-gray-500 h-[1px] w-full my-6'}></div>)
}

function App() {
    return (
        <>
            <div className="flex flex-col py-10 gap-10 w-full bg-gray-100 p-10">
                <div>
                    <h1 className={'mb-5 text-xl font-semibold'}>Problem 1:</h1>
                    <p>The styles from the ui-components project
                        are only applied if I include <span className={'italic text-purple-600'}>import 'ui-components/dist/ui-components.css'</span> in <span className={'italic text-purple-600'}>index.ts</span>
                    </p>
                </div>

                <Divider />

                <div>
                    <div>
                        <h1 className={'mb-5 text-xl font-semibold text-pink'}>Problem 2:</h1>
                        <ol className={'list-decimal pl-10'}>
                            <li>Not all colors defined in the index.css file of my component library can be applied in this project.</li>
                            <li>I would like to define colors globally which could then be used by every project which installs the ui-library.</li>
                        </ol>
                    </div>

                    <div className={'flex flex-col'}>
                        <Divider />
                        <div>
                            <CTAButton label={'Test Button'} size={'large'} design={'filled_pink'}/>
                            <p>The button imported from my component library seems to work.</p>
                        </div>

                        <Divider />

                        <div>
                            <div className={'bg-greyscale-dark-1 p-4 rounded-md'}>greyscale-dark-1 is not working</div>
                            <p className={'italic'}>This color is defined in ../../ui-components/src/lib/tailwind/theme.css
                                but the class bg-greyscale-dark-1 is not part of the compiled css.</p>
                        </div>

                        <Divider />

                        <div>
                            <div className={'bg-greyscale-dark-2 p-4 text-white rounded-md'}>greyscale-dark-2 is working
                            </div>
                            <p className={'italic'}>greyscale-dark-2 is defined in
                                ../../ui-components/src/lib/tailwind/theme.css and the compiled .css file also
                                includes the class bg-greyscale-dark-2.
                            </p>
                        </div>

                        <Divider />

                        <div>
                            <div className={'bg-neon-yellow p-4 rounded-md'}>Working: Neon-yellow is defined in ./index.css</div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default App
