<template>
    <div class="story">
        <div class="hero">[hero]</div>
        <div class="content">
            {{$options.pageData[0].title}}
            <!-- <h2>Story {{ $route.params.id }}</h2>

            <div class="section">
                <h3>Overview</h3>
                <p>Discus Navigator is a web application intended to streamline the manufacturing process. As the UX designer, my job is to study the existing application and come up with a new experience that will allow users to focus and perform tasks with speed and accuracy.</p>
                <div class="image-placeholder"></div>
            </div>

            <div class="section">
                <h3>Overview</h3>
                <p>Within Discus is a 3D printing division that prints ceramic molds. The parts these molds generate eventually end up in machines like military or commercial aircraft, so precision is vital. To ensure accuracy is met, data for all steps of the process are entered into Navigator. That data is then monitored and analyzed to determine the molds accuracy. For this story, I will focus on the data entry scenario.</p>
                <div class="image-placeholder"></div>
            </div>

            <div class="section">
                <h3>Challenges</h3>
                <p>A typical mold contains about 10 characteristics and is printed about 10 times - giving users a total of 100 data entries to perform. The new requirements support the 10x10 scenario as well but can also handle up to 100x100. The primary challenge here is to recreate a UI that is easier, faster, and more scalable than the previous.</p>
                <div class="image-placeholder"></div>
            </div>

            <div class="section">
                <h3>Research</h3>
                <p>Being new to Navigator, my first step was to become familiar with it by meeting with stakeholders, reading the help files, creating flow diagrams, and trying to use the app. After I felt comfortable knowing the process and jargon, I sat with users and observed them while they worked.</p>
                <div class="image-placeholder"></div>
                <p>My observations showed many issues in the application but for this specific scenario, I observed a few common issues:</p>

                <ol>
                    <li>Users ignored everything other than the lower right table columns</li>
                    <li>One beginner user couldn't figure out where to start</li>
                    <li>Directions were skipped due to user focusing on task</li>
                </ol>
                <div class="image-placeholder"></div>

                <p>Focusing on the 3 issues, I mocked up with a few wireframes that removed unnecessary elements and provide clear focus while considering on the main challenge of supporting many molds and characteristics. This process continued until I got buy-off from stakeholders and users.</p>
            </div>

            <div class="section">
                <h3>Process &amp; Execution</h3>

                <p>Having some confidence that the concept will work, I created a prototype.</p>
                <div class="image-placeholder"></div>

                <p>The prototype received high remarks from users, so I began finalizing the design and creating design specs. When finalizing, I break out the components and design them individually. This makes it easier for me to document events, states, animations, and interactions for each component.</p>
                <div class="image-placeholder"></div>

                <p>As I design the components, I place them into the layout to ensure a good fit.</p>

                <div class="image-placeholder"></div>

                <p>At the time of writing this, this is where I’m at in the process. Below, I will describe the next steps from here.</p>
            </div>

            <div class="section">
                <h3>Next Steps</h3>
                <p>Once I’m satisfied that all components and layouts are complete, I will setup a meeting with the stakeholders and developers to review the final designs. I don’t anticipate any revisions at this point so after this I will create a final spec for the developers to follow.</p>
            </div>

            <div class="section">
                <h3>Feedback</h3>
                <p>Once the UI is published, I plan to sit with each user before and after they use it for the first time. During this session, I will only observe and look for any new issues. Even if there are no new issues, I may see something that will spark an idea that can improve the UI more.</p>
            </div>-->
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import contentData from "../data/omax_3d.json"

class Story extends Vue {
    data() {
        return {
            pageData: contentData,
        }
    }
}

export default Story
</script>
