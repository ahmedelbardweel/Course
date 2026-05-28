<script setup>
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
import { trackInteraction } from '@/lib/tracker';
import { Link } from '@inertiajs/vue3';
import { PlayCircle, Users, Star } from 'lucide-vue-next';

const props = defineProps({
    id: Number,
    slug: String,
    title: String,
    description: String,
    price: String,
    category: String,
    thumbnail: String,
    isEnrolled: Boolean,
});

const handleView = () => {
    trackInteraction('view_details', props.id, 'App\\Models\\Course');
};
</script>

<template>
    <Card class="border border-brand-hairline rounded-lg overflow-hidden flex flex-col bg-white">
        <!-- Thumbnail Area -->
        <div class="aspect-video relative bg-brand-canvas overflow-hidden border-b border-brand-hairline">
            <img v-if="thumbnail" :src="thumbnail" :alt="title" class="h-full w-full object-cover" />
            <div v-else class="h-full w-full flex items-center justify-center text-brand-muted opacity-40">
                <PlayCircle class="h-10 w-10" />
            </div>
            <div class="absolute top-2 left-2 flex gap-1.5">
                <Badge variant="secondary" class="h-4 text-[8px] font-semibold uppercase px-2 bg-white border border-brand-hairline text-brand-ink">
                    {{ category }}
                </Badge>
                <Badge v-if="isEnrolled" class="h-4 text-[8px] font-semibold uppercase px-2 bg-brand-orange text-white border border-brand-orange">
                    مشترك
                </Badge>
            </div>
        </div>
        
        <CardHeader class="p-3 space-y-1">
            <div class="flex items-center gap-1 mb-0.5">
                <div class="flex items-center text-brand-ink gap-0.5">
                    <Star class="h-2.5 w-2.5 fill-brand-ink text-brand-ink" />
                    <Star class="h-2.5 w-2.5 fill-brand-ink text-brand-ink" />
                    <Star class="h-2.5 w-2.5 fill-brand-ink text-brand-ink" />
                    <Star class="h-2.5 w-2.5 fill-brand-ink text-brand-ink" />
                    <Star class="h-2.5 w-2.5 text-brand-hairline fill-brand-hairline" />
                </div>
                <span class="text-[9px] font-semibold text-brand-muted mr-1">(4.8)</span>
            </div>
            <CardTitle class="text-[12px] font-semibold text-brand-ink line-clamp-1 leading-tight">{{ title }}</CardTitle>
            <CardDescription class="text-[10px] line-clamp-2 h-7 leading-relaxed text-brand-body font-medium">
                {{ description }}
            </CardDescription>
        </CardHeader>

        <CardFooter class="p-3 pt-0 mt-auto border-t border-brand-hairline bg-brand-canvas-soft flex items-center justify-between">
            <div class="text-[12px] font-semibold text-brand-ink">
                {{ price }}
            </div>
            <Link :href="route('courses.show', { slug: props.slug })" class="shrink-0">
                <Button @click="handleView" variant="ghost" size="sm" class="h-7 text-[10px] font-semibold text-brand-ink border border-brand-hairline rounded-md px-3 bg-white">
                    {{ isEnrolled ? 'عرض الكورس' : 'التفاصيل' }}
                </Button>
            </Link>
        </CardFooter>
    </Card>
</template>
