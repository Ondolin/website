<template>
  <div>
    <div ref="elements">
      <slot />
    </div>

    <!-- set wheel in bottom right corner -->
    <div ref="wheel" class="fixed -bottom-36 -right-36">
      <div class="relative w-64 h-64">
        <div class="absolute top-28 -left-16 w-80 h-8">{{currentChapter ? currentChapter.title : ''}}</div>
        <img class="rounded-full w-full h-full" src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chapters: [],
      currentChapter: null,
      chapterProgress: 0,
    };
  },
  mounted() {
    this.chapters = Array.from(this.$refs.elements.children).map(child => {
      return {
        title: child.childNodes[0].innerText,
        size: child.getBoundingClientRect(),
      }
    });

    console.log(this.chapters)

    this.addScrollEventListener();

    this.updateWheel(0);

  },
  methods: {
    addScrollEventListener() {
      this.eventHandler();
      document.addEventListener('scroll', this.eventHandler);
    },
    updateWheel(deg) {

      deg += 90; // set default rotation to 90°

      let image = this.$refs.wheel;

      image.style.webkitTransform = 'rotate('+deg+'deg)';
      image.style.mozTransform    = 'rotate('+deg+'deg)';
      image.style.msTransform     = 'rotate('+deg+'deg)';
      image.style.oTransform      = 'rotate('+deg+'deg)';
      image.style.transform       = 'rotate('+deg+'deg)';
    },
    eventHandler() {
      let currentTopPosition = window.scrollY + window.innerHeight;

      for (let i = 0; i < this.chapters.length; i++) {
        if (currentTopPosition >= this.chapters[i].size.top && (i + 1 >= this.chapters.length || currentTopPosition < this.chapters[i + 1].size.top)) {
          this.currentChapter = this.chapters[i];
          this.chapterProgress = Math.ceil(((currentTopPosition - this.chapters[i].size.top) / this.chapters[i].size.height) * 100);
          this.updateWheel(-this.chapterProgress * 0.9);
          break;
        }
      }
    }
  }
}
</script>
