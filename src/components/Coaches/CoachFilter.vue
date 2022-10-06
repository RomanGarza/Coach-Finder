<template>
    <base-card>
        <h2 class="font-bold text-lg">Find your Coach</h2>
        <div class="flex flex-row my-2">
        <span>
            <input type="checkbox" id="frontend" checked @change="setFilter" class="checkbox checkbox-primary mx-1.5" />
            <label for="frontend">Frontend</label>
        </span>
        <span>
            <input type="checkbox" id="backend" checked @change="setFilter" class="checkbox checkbox-secondary mx-1.5" />
            <label for="backend">Backend</label>
        </span>
        <span>
            <input type="checkbox" id="career" checked @change="setFilter" class="checkbox checkbox-accent mx-1.5" />
            <label for="career">Career</label>
        </span>
    </div>
    </base-card>
</template>

<script>
export default {
    emits: ['change-filter'],
    data() {
        return {
            filters: {
                frontend: true,
                backend: true,
                career: true,
            }
        };
    },
    methods: {
        setFilter(event) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            };
            this.filters = updatedFilters;
            this.$emit('change-filter', updatedFilters)
        }
    }
}
</script>